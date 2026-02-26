import React from "react";
import { motion } from "motion/react";
import { fadeUpVariants } from "../lib/animations";

const Quote: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl"
      >
        <span className="text-brand-orange font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Cotización</span>
        <h1 className="text-6xl md:text-8xl font-display mb-12">SOLICITA TU <br />PRESUPUESTO</h1>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="NOMBRE COMPLETO" className="bg-brand-dark-alt border border-brand-dark-border p-4 font-display tracking-widest outline-none focus:border-brand-orange transition-colors" />
          <input type="email" placeholder="EMAIL CORPORATIVO" className="bg-brand-dark-alt border border-brand-dark-border p-4 font-display tracking-widest outline-none focus:border-brand-orange transition-colors" />
          <select className="bg-brand-dark-alt border border-brand-dark-border p-4 font-display tracking-widest outline-none focus:border-brand-orange transition-colors">
            <option>TIPO DE SERVICIO</option>
            <option>CARGA MASIVA</option>
            <option>ALMACENAMIENTO</option>
          </select>
          <textarea placeholder="DETALLES DEL REQUERIMIENTO" rows={5} className="bg-brand-dark-alt border border-brand-dark-border p-4 font-display tracking-widest outline-none focus:border-brand-orange transition-colors"></textarea>
          <button className="bg-brand-orange text-brand-dark py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors">Enviar Solicitud</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Quote;
