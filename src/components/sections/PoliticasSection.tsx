import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import {
  BadgeCheck, ShieldCheck, Wine, Route,
  ChevronDown, CheckCircle2
} from 'lucide-react';
import { POLITICAS, Politica } from '../../lib/politicas';

// ── Ícono map ────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  BadgeCheck, ShieldCheck, Wine, Route,
};

// ── Variantes ────────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const bodyVariants: Variants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  },
};

const lineVariants: Variants = {
  collapsed: { scaleX: 0 },
  open: { scaleX: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.07, duration: 0.35, ease: 'easeOut' },
  }),
};

// ── Accordion Item ───────────────────────────────────────────────────
function PoliticaAccordion({
  politica,
  isOpen,
  onToggle,
  index,
}: {
  politica: Politica;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const Icon = ICON_MAP[politica.icon] ?? BadgeCheck;

  return (
    <motion.div
      variants={itemVariants}
      layout
      className={`
        border overflow-hidden transition-colors duration-300
        ${isOpen ? 'border-brand-accent/40 bg-brand-bg-2' : 'border-brand-border bg-brand-bg'}
      `}
    >
      {/* ── Header del accordion ── */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 p-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`politica-${politica.id}`}
      >
        {/* Número índice */}
        <span className={`
          font-mono text-xs tracking-widest flex-shrink-0 w-6
          transition-colors duration-300
          ${isOpen ? 'text-brand-accent' : 'text-brand-subtle'}
        `}>
          0{index + 1}
        </span>

        {/* Ícono */}
        <div className={`
          w-10 h-10 flex items-center justify-center flex-shrink-0
          border transition-all duration-300
          ${isOpen
            ? 'border-brand-accent text-brand-accent bg-brand-accent/10 shadow-glow'
            : 'border-brand-border text-brand-muted group-hover:border-brand-accent/30 group-hover:text-brand-accent/50'}
        `}>
          <Icon size={16} />
        </div>

        {/* Título + badge + resumen */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-display text-xl text-brand-text uppercase tracking-wider leading-none">
              {politica.titulo}
            </span>
            {politica.etiqueta && (
              <span className="
                text-[10px] font-mono tracking-widest px-2 py-0.5
                border border-brand-accent/50 text-brand-accent bg-brand-accent/5
              ">
                {politica.etiqueta}
              </span>
            )}
          </div>
          <AnimatePresence>
            {!isOpen && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-brand-grey text-xs mt-1 font-mono tracking-wide truncate"
              >
                {politica.resumen}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`flex-shrink-0 transition-colors duration-300
            ${isOpen ? 'text-brand-accent' : 'text-brand-subtle'}`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      {/* Línea naranja animada */}
      <motion.div
        className="h-[1px] bg-gradient-to-r from-brand-accent to-transparent origin-left"
        variants={lineVariants}
        animate={isOpen ? 'open' : 'collapsed'}
        initial="collapsed"
      />

      {/* ── Body ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`politica-${politica.id}`}
            key="body"
            variants={bodyVariants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              className="px-6 pb-8 pt-4 pl-6 md:pl-[4.5rem] space-y-5"
            >
              {politica.contenido.map((bloque, i) => {
                if (bloque.tipo === 'parrafo') {
                  return (
                    <motion.p
                      key={i}
                      custom={i}
                      variants={listItemVariants}
                      className="text-brand-muted text-sm leading-relaxed"
                    >
                      {bloque.texto}
                    </motion.p>
                  );
                }

                if (bloque.tipo === 'destacado') {
                  return (
                    <motion.blockquote
                      key={i}
                      custom={i}
                      variants={listItemVariants}
                      className="
                        border-l-2 border-brand-accent pl-5
                        text-brand-muted text-sm leading-relaxed italic
                        bg-brand-accent/5 py-3 pr-4
                      "
                    >
                      {bloque.texto}
                    </motion.blockquote>
                  );
                }

                if (bloque.tipo === 'lista' && bloque.items) {
                  return (
                    <ul key={i} className="space-y-3">
                      {bloque.items.map((item, j) => (
                        <motion.li
                          key={j}
                          custom={j}
                          variants={listItemVariants}
                          className="flex items-start gap-3 text-sm text-brand-muted"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-brand-accent mt-0.5 flex-shrink-0"
                          />
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Sección principal exportada ──────────────────────────────────────
export function PoliticasSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="politicas"
      aria-label="Políticas corporativas TC Logistix"
      className="py-24 px-4 bg-brand-bg"
    >
      <div className="max-w-4xl mx-auto">

        {/* ── Encabezado ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="text-brand-accent text-xs font-mono tracking-[0.25em] uppercase block mb-3">
            Gobierno Corporativo
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-brand-text uppercase leading-none">
            Nuestras<br />
            <span className="text-brand-accent">Políticas</span>
          </h2>

          {/* Línea decorativa */}
          <motion.div
            className="mt-5 h-[2px] w-16 bg-brand-accent origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <p className="mt-4 text-brand-muted text-sm max-w-xl leading-relaxed">
            Comprometidos con los más altos estándares que cuidan a las personas y la operación.
            Conoce los principios que rigen cada proceso de TC Logistix.
          </p>
        </motion.div>

        {/* ── Lista de accordions ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-2"
        >
          {POLITICAS.map((politica, index) => (
            <PoliticaAccordion
              key={politica.id}
              politica={politica}
              isOpen={openId === politica.id}
              onToggle={() => toggle(politica.id)}
              index={index}
            />
          ))}
        </motion.div>

        {/* ── Certificaciones ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-12 border-t border-brand-border"
        >
          <p className="text-brand-subtle text-xs font-mono tracking-[0.2em] uppercase mb-6 text-center">
            Certificaciones que respaldan estas políticas
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {['RUC', 'BASC', 'ISO', 'ANDI'].map((cert) => (
              <motion.span
                key={cert}
                whileHover={{ scale: 1.05, color: 'var(--color-accent)' }}
                className="
                  text-brand-subtle font-display text-2xl tracking-widest
                  transition-colors duration-200 cursor-default
                "
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
