import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeColors() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === 'dark' : true; // default dark

  return {
    isDark,
    isLight: !isDark,
    // Retornar colores condicionalmente cuando se necesite lógica en JS
    accent:       isDark ? '#FF6B00' : '#E55A00',
    accentGlow:   isDark ? 'rgba(255,107,0,0.2)' : 'rgba(229,90,0,0.12)',
    bgPrimary:    isDark ? '#0A0A0A' : '#F2EDE8',
    textPrimary:  isDark ? '#F5F5F0' : '#1A1A1A',
  };
}
