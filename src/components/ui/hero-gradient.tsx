'use client';

import { motion } from 'framer-motion';

export const HeroGradient = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(210,138,66,0.16),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(33,51,40,0.12),_transparent_35%)]"
    />
  );
};
