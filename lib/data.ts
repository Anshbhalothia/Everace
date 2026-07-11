import type { Product } from '@product/product';

export const heroImages = [
  '/images/everace-1.jpeg',
  '/images/everace-2.jpeg',
  '/images/everace-3.jpeg',
  '/images/everace-4.jpeg'
];

export const categories = [
  { title: 'Dry Fruits', description: 'Curated premium nuts from Kashmiri valleys.', slug: 'dry-fruits' },
  { title: 'Kashmiri Saffron', description: 'Pure, aromatic saffron threads from the Himalayas.', slug: 'saffron' },
  { title: 'Wellness Oils', description: 'Cold-pressed oils with elegant Indian craftsmanship.', slug: 'oils' },
  { title: 'Artisanal Preserves', description: 'Handcrafted preserves with natural luxury taste.', slug: 'preserves' },
];

export const testimonials = [
  {
    quote: 'EVERACE feels like a luxury ritual. Every product is quietly indulgent and deeply refined.',
    author: 'Aanya S.',
    role: 'Wellness Curator',
  },
  {
    quote: 'The design, the quality, the calmness of the experience is unlike any other wellness brand.',
    author: 'Dev G.',
    role: 'Interior Stylist',
  },
  {
    quote: 'From the first scent to the last bite, EVERACE brings premium Kashmiri authenticity to home rituals.',
    author: 'Mira P.',
    role: 'Lifestyle Editor',
  },
];

export const products: Product[] = [
  {
    id: 'rare-kashmiri-saffron',
    slug: 'kashmiri-saffron-premium-grade',
    title: 'Everace Kashmiri Saffron',
    category: 'Kashmiri Saffron',
    description: 'Pure Kashmiri saffron threads sourced from the mountain valleys of purity.',
    origin: 'Kashmir Valley\nHand-harvested with artisanal care.',
    details: ['1g premium threads', 'Natural color intensity', 'Floral fragrance'],
    price: 2499,
    rating: 4.9,
    badge: 'Pure',
    images: ['/images/everace-16.jpeg', '/images/everace-5.jpeg', '/images/everace-6.jpeg'],
    variants: [
      { id: 'saffron-1g', label: '1g', price: 2499, inventory: 22 },
      { id: 'saffron-2g', label: '2g', price: 4499, inventory: 14 },
    ],
    story:
      'From the valleys of purity. Hand-harvested with sunrise rituals, this saffron is crafted to elevate every wellness moment.',
    taste: 'Delicate floral, subtly earthy, rich and aromatic.',
    ingredients: ['100% Kashmiri saffron'].map((item) => item),
  },
  {
    id: 'premium-walnuts',
    slug: 'premium-kashmiri-walnuts',
    title: 'Everace Premium Walnuts',
    category: 'Premium Nuts',
    description: 'Handpicked walnut halves with a quiet luxury finish and smooth natural richness.',
    origin: 'Kashmiri orchards\nSlow-dried for purity.',
    details: ['250g pack', 'Rich omega profile', 'Naturally preserved'],
    price: 1299,
    rating: 4.8,
    images: ['/images/everace-8.jpeg', '/images/everace-7.jpeg', '/images/everace-9.jpeg'],
    variants: [{ id: 'walnuts-250g', label: '250g', price: 1299, inventory: 34 }],
    story:
      'Everace walnuts are chosen from the finest Kashmir groves, presenting a nourishing luxury that feels both modern and timeless.',
    taste: 'Buttery, warm, slightly earthy with textured richness.',
    ingredients: ['100% premium walnuts'],
  },
  {
    id: 'pure-apricot-oil',
    slug: 'pure-apricot-oil-50ml',
    title: 'Everace Pure Apricot Oil',
    category: 'Apricot Oil',
    description: 'Cold-pressed apricot oil in a refined glass bottle for ritual self-care.',
    origin: 'Kashmir orchards\nPressed with calm precision.',
    details: ['50ml bottle', 'Cold-pressed', 'Luxury skincare oil'],
    price: 1499,
    rating: 4.7,
    images: ['/images/everace-13.jpeg', '/images/everace-14.jpeg', '/images/everace-12.jpeg'],
    variants: [{ id: 'oil-50ml', label: '50ml', price: 1499, inventory: 18 }],
    story:
      'A refined oil distilled from the finest apricots, designed to bring premium Indian wellness into everyday rituals.',
    taste: 'Soft, nutty, with a natural golden warmth.',
    ingredients: ['100% pure apricot oil'],
  },
  {
    id: 'luxury-honey',
    slug: 'pure-indian-honey-500g',
    title: 'Everace Pure Indian Honey',
    category: 'Honey',
    description: 'Golden honey finished in an elegant jar, crafted for mindful luxury.',
    origin: 'Kashmiri apiaries\nHarvested with care.',
    details: ['500g jar', '100% pure', 'Natural floral notes'],
    price: 1199,
    rating: 4.9,
    images: ['/images/everace-12.jpeg', '/images/everace-14.jpeg', '/images/everace-15.jpeg'],
    variants: [{ id: 'honey-500g', label: '500g', price: 1199, inventory: 28 }],
    story:
      'Sourced from the finest blossoms of Kashmir, this honey is a slow luxury treat for elevated daily rituals.',
    taste: 'Warm floral sweetness with elegant depth.',
    ingredients: ['100% natural honey'],
  },
  {
    id: 'shilajit-resin',
    slug: 'shilajit-resin-premium',
    title: 'Everace Shilajit Resin',
    category: 'Natural Wellness',
    description: 'Premium Himalayan shilajit resin presented with quiet, premium craftsmanship.',
    origin: 'Himalayan mountains\nHand-sorted resin.',
    details: ['50g jar', 'Pure resin', 'Ancient botanical ritual'],
    price: 1899,
    rating: 4.8,
    images: ['/images/everace-11.jpeg', '/images/everace-17.jpeg', '/images/everace-18.jpeg'],
    variants: [{ id: 'shilajit-50g', label: '50g', price: 1899, inventory: 12 }],
    story:
      'A timeless wellness offering, carefully refined for modern luxury routines and subtle energy support.',
    taste: 'Earthy, rich, with warm mineral notes.',
    ingredients: ['100% shilajit resin'],
  },
];

export const orderSummary = {
  shipping: 75,
  tax: 0,
  discount: 0,
};

export const quickActions = [
  { title: 'Checkout', label: 'Apple Pay style', key: 'express' },
  { title: 'Gift-ready packaging', label: 'Luxury presentation', key: 'gift' },
];

export const faq = [
  {
    question: 'Can I place a guest order?',
    answer: 'Yes, EVERACE checkout supports a seamless guest flow with minimal fields and express UPI payment readiness.',
  },
  {
    question: 'How long is delivery?',
    answer: 'Premium shipping is designed for speed and care, with tracking updates and soft packaging.',
  },
];
