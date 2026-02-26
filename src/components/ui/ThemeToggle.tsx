import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

// Variantes para el ícono que entra/sale
const iconVariants = {
  enter: { rotate: -90, opacity: 0, scale: 0.5 },
  center: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  },
  exit: {
    rotate: 90,
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.15 },
  },
} as const;

export const ThemeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar hydration mismatch: solo renderizar en cliente
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Placeholder del mismo tamaño para evitar layout shift
    return <div className="w-10 h-10" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className={`
        relative w-10 h-10 flex items-center justify-center
        border transition-colors duration-300 overflow-hidden cursor-pointer
        ${isDark
          ? 'border-brand-border hover:border-brand-accent text-brand-muted hover:text-brand-accent'
          : 'border-brand-border hover:border-brand-accent text-brand-muted hover:text-brand-accent'}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
    >
      {/* Fondo sutil que aparece en hover */}
      <motion.span
        className="absolute inset-0 bg-brand-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Ícono animado */}
      <AnimatePresence mode="wait">
        <motion.span
          key={resolvedTheme}
          variants={iconVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="relative z-10"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};
