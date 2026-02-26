import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import {
  TrendingUp, Globe2, Truck, Warehouse,
  PackageCheck, Phone, ChevronDown, MessageCircle,
  Box
} from 'lucide-react';
import { AREAS_CONTACTO, AreaContacto } from '../../lib/contactos';

// ── Mapa de íconos ───────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp, Globe2, Truck, Warehouse, PackageCheck, Container: Box,
};

// ── Variantes Framer Motion ──────────────────────────────────────────
const sectionVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const accordionBody: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const contactoRow: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.3 },
  }),
};

// ── Componente Card de Área ──────────────────────────────────────────
function AreaCard({ area }: { area: AreaContacto }) {
  const [open, setOpen] = useState(false);
  const Icon = ICON_MAP[area.icon] ?? Phone;

  // Número wa.me (solo dígitos)
  const toWa = (tel: string) =>
    'https://wa.me/' + tel.replace(/\D/g, '');

  return (
    <motion.div
      variants={cardVariants}
      className="border border-brand-border bg-brand-bg-2 overflow-hidden group"
      layout
    >
      {/* Header del accordion */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          {/* Ícono con glow en hover */}
          <div className={`
            w-10 h-10 flex items-center justify-center border flex-shrink-0
            transition-all duration-300
            ${open
              ? 'border-brand-accent bg-brand-accent/10 text-brand-accent shadow-glow'
              : 'border-brand-border text-brand-subtle group-hover:border-brand-accent/40 group-hover:text-brand-accent/60'}
          `}>
            <Icon size={18} />
          </div>

          <div>
            <p className="font-display text-lg text-brand-text uppercase tracking-wider leading-none">
              {area.area}
            </p>
            <p className="text-brand-subtle text-xs font-mono tracking-widest mt-0.5">
              {area.contactos.length} contacto{area.contactos.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Chevron animado */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="text-brand-subtle"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      {/* Línea naranja que crece al abrir */}
      <motion.div
        className="h-[1px] bg-brand-accent origin-left"
        animate={{ scaleX: open ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Body del accordion */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            variants={accordionBody}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="overflow-hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              className="px-5 py-4 space-y-3"
            >
              {area.contactos.map((c, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={contactoRow}
                  className="flex items-center justify-between gap-3 py-2
                             border-b border-brand-surface last:border-0"
                >
                  {/* Cargo */}
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                    <span className="text-brand-muted text-sm truncate">{c.cargo}</span>
                  </div>

                  {/* Teléfono + botones */}
                  {c.telefono !== 'Próximamente' ? (
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-brand-text text-sm font-mono">{c.telefono}</span>
                      {/* Llamar */}
                      <a
                        href={`tel:${c.telefono.replace(/\D/g, '')}`}
                        aria-label={`Llamar a ${c.cargo}`}
                        className="
                          w-8 h-8 flex items-center justify-center
                          border border-brand-border text-brand-subtle
                          hover:border-brand-accent hover:text-brand-accent
                          transition-colors duration-200
                        "
                      >
                        <Phone size={13} />
                      </a>
                      {/* WhatsApp */}
                      {c.whatsapp && (
                        <a
                          href={toWa(c.telefono)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp a ${c.cargo}`}
                          className="
                            w-8 h-8 flex items-center justify-center
                            border border-brand-border text-brand-subtle
                            hover:border-[#25D366] hover:text-[#25D366]
                            transition-colors duration-200
                          "
                        >
                          <MessageCircle size={13} />
                        </a>
                      )}
                    </div>
                  ) : (
                    <span className="text-brand-subtle text-xs font-mono tracking-widest italic">
                      Próximamente
                    </span>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Componente principal exportado ──────────────────────────────────
export function ContactoDirectorio() {
  const [filtro, setFiltro] = useState('');

  const areasFiltradas = AREAS_CONTACTO.filter((a) =>
    a.area.toLowerCase().includes(filtro.toLowerCase()) ||
    a.contactos.some((c) =>
      c.cargo.toLowerCase().includes(filtro.toLowerCase())
    )
  );

  return (
    <section className="py-24 px-4 bg-brand-bg">
      <div className="max-w-4xl mx-auto">

        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-brand-accent text-xs font-mono tracking-[0.25em] uppercase block mb-3">
            Directorio interno
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-brand-text uppercase leading-none">
            Encuentra el<br />
            <span className="text-brand-accent">Contacto</span> Adecuado
          </h2>
          <motion.div
            className="mt-4 h-[2px] w-16 bg-brand-accent origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="mt-4 text-brand-muted text-sm max-w-lg">
            Conecta directamente con el área que necesitas. Cada equipo está listo para atenderte.
          </p>
        </motion.div>

        {/* Buscador */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-8"
        >
          <input
            type="text"
            placeholder="Buscar área o cargo..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="
              w-full bg-brand-bg-2 border border-brand-border px-5 py-3.5
              text-brand-text text-sm placeholder:text-brand-subtle font-mono
              focus:outline-none focus:border-brand-accent
              transition-colors duration-200
            "
          />
          {filtro && (
            <button
              onClick={() => setFiltro('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-subtle hover:text-brand-text text-xs cursor-pointer"
            >
              ✕ limpiar
            </button>
          )}
        </motion.div>

        {/* Grid de áreas */}
        <AnimatePresence mode="popLayout">
          {areasFiltradas.length > 0 ? (
            <motion.div
              key="grid"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {areasFiltradas.map((area) => (
                <AreaCard key={area.id} area={area} />
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-brand-subtle font-mono text-sm py-16"
            >
              No se encontraron resultados para "{filtro}"
            </motion.p>
          )}
        </AnimatePresence>

        {/* Nota inferior */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center text-brand-subtle text-xs font-mono tracking-widest"
        >
          ¿No encuentras lo que buscas? Escríbenos a{' '}
          <a href="mailto:contacto@tractocar.com"
             className="text-brand-accent hover:underline">
            contacto@tractocar.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
