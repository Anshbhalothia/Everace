import type { FC } from 'react';
import { formatCurrency } from '@lib/utils';

export const PriceTag: FC<{ value: number }> = ({ value }) => {
  return <span className="text-2xl font-semibold text-charcoal">{formatCurrency(value)}</span>;
};
