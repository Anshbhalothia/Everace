import { create } from 'zustand';
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

export const useCartStore = create<CartState>((set, get) => ({
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
    return items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
  },
  count: () => {
    const items = get().items;
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },
}));
