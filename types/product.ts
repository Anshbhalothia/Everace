export type ProductVariant = {
  id: string;
  label: string;
  price: number;
  inventory: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  origin: string;
  details: string[];
  price: number;
  rating: number;
  badge?: string;
  images: string[];
  variants: ProductVariant[];
  story: string;
  taste: string;
  ingredients: string[];
};
