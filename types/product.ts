export type ProductVariant = {
  id: string;
  label: string; // The property storing '1g', '2g', '250g', etc.
  price: number;
  inventory: number;
};

// New Premium Dynamic Interfaces
export type StoryStage = {
  stage: string;
  title: string;
  description: string;
};

export type ProductLedger = {
  harvest: string;
  artisan: string;
  purity: string;
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
  storyStages: StoryStage[]; // Injected for ultra-premium production stories
  ledger: ProductLedger;     // Injected for ultra-premium terroir ledger data
};