import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';

export const Logo: React.FC = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Link to="/" className="flex items-center gap-2 group">
      {/* Cuadro naranja TC — igual en ambos modos */}
      <div className="w-10 h-10 bg-brand-accent flex items-center justify-center rounded-sm transition-transform group-hover:rotate-90 duration-500">
        <span className="text-brand-bg font-display text-2xl font-bold">TC</span>
      </div>
      {/* Texto — cambia con el tema */}
      <div className="flex flex-col">
        <span className="font-display text-brand-text text-xl tracking-tighter leading-none block">
          LOGISTIX
        </span>
        <span className="font-mono text-brand-subtle text-[8px] tracking-[0.3em] uppercase leading-none">
          Tractocar
        </span>
      </div>
    </Link>
  );
};
