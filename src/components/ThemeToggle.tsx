'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: '40px', height: '40px' }} />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'rgba(var(--foreground), 0.1)',
        border: '1px solid rgba(var(--border), 0.5)',
        color: 'rgb(var(--foreground))',
        cursor: 'pointer',
      }}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </motion.button>
  );
}
