import express from "express";
import { createServer as createViteServer } from "vite";
import multer from "multer";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const upload = multer({ storage: multer.memoryStorage() });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Postulaciones
  app.post("/api/postulacion", upload.single("cv"), async (req, res) => {
    try {
      const { nombre, email, telefono, ciudad, mensaje, vacanteId } = req.body;
      const cv = req.file;

      if (!nombre || !email || !cv) {
        return res.status(400).json({ error: "Campos requeridos" });
      }

      if (!process.env.RESEND_API_KEY) {
        console.warn("RESEND_API_KEY is not set. Skipping email sending.");
        return res.json({ ok: true, message: "Simulated success (no API key)" });
      }

      await resend.emails.send({
        from: "noreply@tractocar.com",
        to: "adelarosa@tractocar.com",
        subject: `Nueva postulación: ${vacanteId} — ${nombre}`,
        html: `
          <h2>Nueva Postulación</h2>
          <p><b>Vacante:</b> ${vacanteId}</p>
          <p><b>Nombre:</b> ${nombre}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Teléfono:</b> ${telefono}</p>
          <p><b>Ciudad:</b> ${ciudad}</p>
          ${mensaje ? `<p><b>Mensaje:</b> ${mensaje}</p>` : ''}
        `,
        attachments: [{
          filename: cv.originalname,
          content: cv.buffer,
        }],
      });

      res.json({ ok: true });
    } catch (error) {
      console.error("Error in /api/postulacion:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
