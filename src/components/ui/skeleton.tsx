import type { FC } from 'react';

export const Skeleton: FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse rounded-3xl bg-slate-200/60 ${className}`} />
);
