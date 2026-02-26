import React from "react";
import { motion } from "motion/react";
import { fadeUpVariants } from "../lib/animations";

const Services: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-brand-orange font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Portafolio</span>
        <h1 className="text-6xl md:text-8xl font-display mb-12">SERVICIOS <br />INTEGRALES</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Carga Masiva", "Comercio Exterior", "Almacenamiento", "Distribución", "Logística Inversa", "Consultoría"].map((s) => (
            <div key={s} className="border border-brand-dark-border p-10 hover:border-brand-orange transition-colors">
              <h3 className="text-2xl font-display mb-4">{s}</h3>
              <p className="text-brand-grey text-sm">Descripción detallada del servicio de {s.toLowerCase()} para optimizar su cadena de suministro.</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
