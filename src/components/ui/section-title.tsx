'use client';

import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: boolean;
  children?: ReactNode;
};

export const SectionTitle: FC<SectionTitleProps> = ({ eyebrow, title, description, accent, children }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#7a6a5f]">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-serif leading-tight text-charcoal sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4d473f] sm:text-base">{description}</p> : null}
      {children}
    </motion.div>
  );
};
