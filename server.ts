import express from "express";
import multer from "multer";
import { Resend } from "resend";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const upload = multer({ storage: multer.memoryStorage() });

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// API Route for Contacto General
app.post("/api/contact", async (req, res) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[Resend] RESEND_API_KEY no definida — email no enviado");
    return res.status(200).json({
      ok: false,
      message: "Servicio de email no configurado temporalmente.",
    });
  }

  const resend = new Resend(apiKey);
  const { nombre, email, mensaje } = req.body;

  try {
    await resend.emails.send({
      from: "contacto@tractocar.com",
      to: "adelarosa@tractocar.com",
      subject: `Nuevo contacto: ${nombre}`,
      html: `
        <h2>Nuevo Mensaje de Contacto</h2>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
      `,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[Resend] Error al enviar email:", error);
    return res.status(500).json({ ok: false, message: "Error al enviar email." });
  }
});

// API Route for Postulaciones
app.post("/api/postulacion", upload.single("cv"), async (req, res) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[Resend] RESEND_API_KEY no definida — email no enviado");
    return res.status(200).json({
      ok: false,
      message: "Servicio de email no configurado temporalmente.",
    });
  }

  const resend = new Resend(apiKey);
  const { nombre, email, telefono, ciudad, mensaje, vacanteId } = req.body;
  const cv = req.file;

  if (!nombre || !email || !cv) {
    return res.status(400).json({ error: "Campos requeridos" });
  }

  try {
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
        ${mensaje ? `<p><b>Mensaje:</b> ${mensaje}</p>` : ""}
      `,
      attachments: [{
        filename: cv.originalname,
        content: cv.buffer,
      }],
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[Resend] Error al enviar email:", error);
    return res.status(500).json({ ok: false, message: "Error al enviar email." });
  }
});

// API Route for Cotizaciones
app.post("/api/cotizar", async (req, res) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[Resend] RESEND_API_KEY no definida — email no enviado");
    return res.status(200).json({
      ok: false,
      message: "Servicio de email no configurado temporalmente.",
    });
  }

  const resend = new Resend(apiKey);
  const { nombre, email, servicio, detalles } = req.body;

  try {
    await resend.emails.send({
      from: "cotizaciones@tractocar.com",
      to: "adelarosa@tractocar.com",
      subject: `Nueva solicitud de cotización: ${servicio}`,
      html: `
        <h2>Nueva Solicitud de Cotización</h2>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Servicio:</b> ${servicio}</p>
        <p><b>Detalles:</b> ${detalles}</p>
      `,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[Resend] Error al enviar email:", error);
    return res.status(500).json({ ok: false, message: "Error al enviar email." });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[Express] API corriendo en http://localhost:${PORT}`);
});
