import React from "react";
import { motion } from "motion/react";
import { fadeUpVariants } from "../lib/animations";

const Quote: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto bg-brand-bg">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl"
      >
        <span className="text-brand-accent font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Cotización</span>
        <h1 className="text-6xl md:text-8xl font-display mb-12 text-brand-text">SOLICITA TU <br />PRESUPUESTO</h1>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="NOMBRE COMPLETO" className="bg-brand-bg-2 border border-brand-border p-4 font-display tracking-widest outline-none focus:border-brand-accent transition-colors text-brand-text placeholder:text-brand-subtle" />
          <input type="email" placeholder="EMAIL CORPORATIVO" className="bg-brand-bg-2 border border-brand-border p-4 font-display tracking-widest outline-none focus:border-brand-accent transition-colors text-brand-text placeholder:text-brand-subtle" />
          <select className="bg-brand-bg-2 border border-brand-border p-4 font-display tracking-widest outline-none focus:border-brand-accent transition-colors text-brand-text">
            <option className="bg-brand-bg text-brand-text">TIPO DE SERVICIO</option>
            <option className="bg-brand-bg text-brand-text">CARGA MASIVA</option>
            <option className="bg-brand-bg text-brand-text">ALMACENAMIENTO</option>
          </select>
          <textarea placeholder="DETALLES DEL REQUERIMIENTO" rows={5} className="bg-brand-bg-2 border border-brand-border p-4 font-display tracking-widest outline-none focus:border-brand-accent transition-colors text-brand-text placeholder:text-brand-subtle"></textarea>
          <button className="bg-brand-accent text-brand-bg py-4 font-bold uppercase tracking-widest hover:bg-brand-text hover:text-brand-bg transition-colors">Enviar Solicitud</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Quote;
