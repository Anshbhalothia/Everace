import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@product/product';

export type CartItem = {
  product: Product;
  variantId: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product, variantId: string, quantity?: number) => void;
  removeItem: (variantId: string) => void;
  updateItem: (variantId: string, quantity: number) => void;
  clear: () => void;
  total: () => number;
  count: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, variantId, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((item) => item.variantId === variantId);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.variantId === variantId
                  ? { ...item, quantity: Math.min(item.quantity + quantity, 99) }
                  : item
              ),
            };
          }
          return {
            items: [...state.items, { product, variantId, quantity }],
          };
        });
      },
      removeItem: (variantId) => {
        set((state) => ({ items: state.items.filter((item) => item.variantId !== variantId) }));
      },
      updateItem: (variantId, quantity) => {
        set((state) => {
          if (quantity < 1) {
            return {
              items: state.items.filter((item) => item.variantId !== variantId),
            };
          }

          return {
            items: state.items.map((item) =>
              item.variantId === variantId ? { ...item, quantity: Math.min(Math.max(quantity, 1), 99) } : item
            ),
          };
        });
      },
      clear: () => set({ items: [] }),
      total: () => {
        const items = get().items;
        // Check if individual item variant has a specific price override, fallback to standard product price
        return items.reduce((sum, item) => {
          const matchedVariant = item.product.variants?.find(v => v.id === item.variantId);
          const currentPrice = matchedVariant && 'price' in matchedVariant ? (matchedVariant as any).price : item.product.price;
          return sum + item.quantity * currentPrice;
        }, 0);
      },
      count: () => {
        const items = get().items;
        return items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'everace-cart-storage', // Key item name in localStorage
    }
  )
);