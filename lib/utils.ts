export function cn(...values: Array<string | undefined | false | null>) {
  return values.filter(Boolean).join(' ');
}

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};
