import type { FC } from 'react';

export const Badge: FC<{ label: string }> = ({ label }) => {
  return (
    <span className="inline-flex rounded-full border border-[#c7b69b] bg-[#f6f0e8]/80 px-3 py-1 text-xs uppercase tracking-[0.26em] text-[#5b4f42]">{label}</span>
  );
};
