import React, { useState } from "react";
import { motion } from "motion/react";
import { fadeUpVariants } from "../lib/animations";
import { VacanteModal } from "../components/vacantes/VacanteModal";
import { Vacante } from "../types/vacante";
import { VACANTES_DATA } from "../lib/vacantes-data";

const Vacancies: React.FC = () => {
  const [selected, setSelected] = useState<Vacante | null>(null);

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto bg-brand-bg">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-brand-accent font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Talento Humano</span>
        <h1 className="text-6xl md:text-8xl font-display mb-12 text-brand-text">ÚNETE AL <br />EQUIPO</h1>
        <div className="flex flex-col gap-6">
          {VACANTES_DATA.map((v, i) => (
            <div 
              key={v.id} 
              className="bg-brand-bg-2 p-8 border border-brand-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-brand-surface transition-colors cursor-pointer group"
              onClick={() => setSelected(v)}
            >
              <div>
                <span className="text-brand-accent font-mono text-[10px] uppercase tracking-widest mb-2 block">{v.area}</span>
                <h3 className="text-2xl md:text-3xl font-display mb-1 group-hover:text-brand-accent transition-colors text-brand-text">{v.titulo}</h3>
                <span className="text-brand-muted text-xs uppercase tracking-widest">{v.ciudad} • {v.tipo}</span>
              </div>
              <button 
                className="text-brand-accent font-display text-lg uppercase tracking-widest hover:underline border border-brand-accent/20 px-6 py-2 group-hover:bg-brand-accent group-hover:text-brand-bg transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(v);
                }}
              >
                Ver Vacante
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      <VacanteModal
        vacante={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default Vacancies;
