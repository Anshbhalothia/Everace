import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@components/ui/button';
import { useCartStore } from '@store/cart';
import type { Product } from '@product/product';
import { formatCurrency } from '@lib/utils';

export const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const updateItem = useCartStore((state) => state.updateItem);
  const cartItem = useCartStore((state) => state.items.find((item) => item.variantId === product.variants[0].id));
  const variantId = product.variants[0].id;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[32px] border border-[#e4d8c9] bg-white/90 shadow-panel transition-all"
    >
      <Link to={`/product/${product.slug}`} className="relative block h-[340px] overflow-hidden bg-[#f7f1e8]">
        <img
          src={product.images[0] ?? '/images/placeholder.png'}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-4 p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-[#857360]">{product.category}</p>
        <Link to={`/product/${product.slug}`} className="block">
          <h3 className="text-xl font-serif text-charcoal transition hover:text-walnut">{product.title}</h3>
        </Link>
        <p className="text-sm leading-7 text-[#5a4f44]">{product.description}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-lg font-semibold text-charcoal">{formatCurrency(product.price)}</span>
          {cartItem ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c7b69b] bg-ivory px-3 py-2 text-sm text-[#5a4f44]">
              <button
                type="button"
                onClick={() => updateItem(variantId, cartItem.quantity - 1)}
                className="rounded-full border border-[#c7b69b] px-3 py-2"
              >
                –
              </button>
              <span className="min-w-[1.5rem] text-center font-semibold">{cartItem.quantity}</span>
              <button
                type="button"
                onClick={() => updateItem(variantId, cartItem.quantity + 1)}
                className="rounded-full border border-[#c7b69b] px-3 py-2"
              >
                +
              </button>
            </div>
          ) : (
            <Button className="whitespace-nowrap" onClick={() => addItem(product, variantId)}>
              Add
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
