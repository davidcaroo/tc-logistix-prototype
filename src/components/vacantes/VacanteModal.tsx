import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { X, MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react';
import { Vacante } from '../../types/vacante';
import { PostulacionForm } from './PostulacionForm';

interface VacanteModalProps {
  vacante: Vacante | null;
  isOpen: boolean;
  onClose: () => void;
}

// ── Variantes de animación ──────────────────────────────────────────
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.1 } },
};

const modalVariants: any = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 40,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    filter: 'blur(4px)',
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const contentItemVariants: any = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

// ── Componente principal ────────────────────────────────────────────
export function VacanteModal({ vacante, isOpen, onClose }: VacanteModalProps) {
  const [showForm, setShowForm] = useState(false);

  // Bloquear scroll del body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setShowForm(false); // Reset al cerrar
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!vacante) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* ── Modal ── */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            className="
              fixed inset-0 z-50 flex items-center justify-center p-4
              pointer-events-none
            "
          >
            <motion.div
              className="
                relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
                bg-[#141414] border border-[#2A2A2A] rounded-sm
                pointer-events-auto
                scrollbar-thin scrollbar-track-[#1C1C1C] scrollbar-thumb-[#FF6B00]
              "
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Línea superior naranja */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF6B00]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              />

              {/* ── Header del modal ── */}
              <div className="p-8 pb-6 border-b border-[#2A2A2A]">
                <motion.div variants={contentItemVariants} className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[#FF6B00] text-xs font-mono tracking-[0.2em] uppercase mb-3 block">
                      {vacante.area}
                    </span>
                    <h2
                      id="modal-titulo"
                      className="font-display text-3xl md:text-4xl text-white uppercase leading-none"
                    >
                      {vacante.titulo}
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="
                      flex-shrink-0 w-10 h-10 flex items-center justify-center
                      border border-[#2A2A2A] text-[#888] rounded-sm
                      hover:border-[#FF6B00] hover:text-[#FF6B00]
                      transition-colors duration-200
                    "
                    aria-label="Cerrar modal"
                  >
                    <X size={18} />
                  </button>
                </motion.div>

                {/* Pills de info */}
                <motion.div variants={contentItemVariants} className="flex flex-wrap gap-3 mt-5">
                  <Pill icon={<MapPin size={12} />} label={vacante.ciudad} />
                  <Pill icon={<Clock size={12} />} label={vacante.tipo} />
                  <Pill icon={<Briefcase size={12} />} label={vacante.area} />
                  {vacante.salario && (
                    <Pill icon={<ChevronRight size={12} />} label={vacante.salario} highlight />
                  )}
                </motion.div>
              </div>

              {/* ── Contenido: descripción o formulario ── */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {!showForm ? (
                    <motion.div
                      key="detalle"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Descripción */}
                      <motion.div variants={contentItemVariants}>
                        <SectionTitle>Descripción del cargo</SectionTitle>
                        <p className="text-[#888] text-sm leading-relaxed mt-2">
                          {vacante.descripcion}
                        </p>
                      </motion.div>

                      {/* Responsabilidades */}
                      <motion.div variants={contentItemVariants} className="mt-7">
                        <SectionTitle>Responsabilidades</SectionTitle>
                        <ul className="mt-3 space-y-2">
                          {vacante.responsabilidades.map((item, i) => (
                            <ListItem key={i} text={item} index={i} />
                          ))}
                        </ul>
                      </motion.div>

                      {/* Requisitos */}
                      <motion.div variants={contentItemVariants} className="mt-7">
                        <SectionTitle>Requisitos</SectionTitle>
                        <ul className="mt-3 space-y-2">
                          {vacante.requisitos.map((item, i) => (
                            <ListItem key={i} text={item} index={i} />
                          ))}
                        </ul>
                      </motion.div>

                      {/* Ofrecemos */}
                      <motion.div variants={contentItemVariants} className="mt-7">
                        <SectionTitle>¿Qué ofrecemos?</SectionTitle>
                        <ul className="mt-3 space-y-2">
                          {vacante.ofrecemos.map((item, i) => (
                            <ListItem key={i} text={item} index={i} accent />
                          ))}
                        </ul>
                      </motion.div>

                      {/* CTA */}
                      <motion.div variants={contentItemVariants} className="mt-10">
                        <motion.button
                          onClick={() => setShowForm(true)}
                          className="
                            relative w-full py-4 px-8
                            bg-[#FF6B00] text-black
                            font-display text-xl tracking-widest uppercase
                            overflow-hidden group
                          "
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          {/* Shimmer */}
                          <span
                            className="
                              absolute inset-0 -translate-x-full
                              bg-gradient-to-r from-transparent via-white/20 to-transparent
                              group-hover:translate-x-full transition-transform duration-700
                            "
                          />
                          <span className="relative z-10">Postular Ahora →</span>
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="formulario"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <PostulacionForm
                        vacanteId={vacante.id}
                        vacanteTitulo={vacante.titulo}
                        contactoEmail={vacante.contactoEmail}
                        onBack={() => setShowForm(false)}
                        onSuccess={onClose}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Sub-componentes locales ──────────────────────────────────────────
function Pill({ icon, label, highlight = false }: {
  icon: React.ReactNode;
  label: string;
  highlight?: boolean;
}) {
  return (
    <span className={`
      inline-flex items-center gap-1.5 px-3 py-1
      text-xs font-mono tracking-widest uppercase rounded-sm border
      ${highlight
        ? 'border-[#FF6B00] text-[#FF6B00] bg-[#FF6B00]/10'
        : 'border-[#2A2A2A] text-[#888] bg-[#1C1C1C]'}
    `}>
      {icon}{label}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-white font-display text-lg uppercase tracking-wider flex items-center gap-3">
      <span className="block w-4 h-[2px] bg-[#FF6B00]" />
      {children}
    </h3>
  );
}

function ListItem({ text, index, accent = false }: {
  text: string;
  index: number;
  accent?: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="flex items-start gap-3 text-sm text-[#888]"
    >
      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
        accent ? 'bg-[#FF6B00]' : 'bg-[#444]'
      }`} />
      {text}
    </motion.li>
  );
}
