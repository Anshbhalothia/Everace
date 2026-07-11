import { motion } from 'framer-motion';
import { cn } from '@lib/utils';
import type { ButtonHTMLAttributes, FC } from 'react';

const MotionButton = motion.button as any;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'md' | 'lg';
};

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/70';
  const variants = {
    primary:
      'bg-charcoal text-ivory shadow-soft hover:bg-[#11100f] active:scale-[0.99] ',
    ghost:
      'bg-white/90 text-charcoal ring-1 ring-slate-200 hover:bg-ivory active:scale-[0.99]',
    outline:
      'border border-[#c7b69b] text-charcoal bg-transparent hover:bg-cream',
  };
  const sizes = {
    md: 'px-6 py-3 text-sm sm:text-base',
    lg: 'px-8 py-4 text-base sm:text-lg',
  };

  return (
    <MotionButton
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </MotionButton>
  );
};
