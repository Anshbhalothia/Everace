import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@store/cart';
import { formatCurrency } from '@lib/utils';
import { Button } from '@components/ui/button';

export const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateItem = useCartStore((state) => state.updateItem);
  const total = useCartStore((state) => state.total());

  return (
    <div className="space-y-8 rounded-[40px] border border-[#e4d2bd] bg-[#fffdfa] p-8 shadow-panel sm:p-12">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-[#7a6a5f]">Cart</p>
        <h2 className="text-4xl font-serif text-charcoal">Your effortless selection.</h2>
      </div>
      <AnimatePresence>
        {items.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-[32px] border border-[#ddd0be] bg-white/90 p-10 text-center text-[#5c5345]">
            <p className="text-lg">Your cart is beautiful and ready for checkout.</p>
            <Link to="/products" className="mt-6 inline-flex rounded-full border border-[#b99c71] bg-[#faf2e5] px-6 py-3 text-sm uppercase tracking-[0.35em] text-[#5e513d] transition hover:bg-[#f2e7d7]">
              Continue shopping
            </Link>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div key={item.variantId} layout className="rounded-[32px] border border-[#e4d2bd] bg-white/95 p-6 shadow-soft">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-20 w-20 overflow-hidden rounded-[24px] bg-[#f7f1e8]">
                      {item.product.images?.[0] ? (
                        <img
                          src={item.product.images[0]}
                          alt={item.product.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-[#9b8d79]">No image</div>
                      )}
                    </div>
                      <div className="min-w-0">
                        <p className="text-sm uppercase tracking-[0.35em] text-[#7b6b56]">{item.product.category}</p>
                        <h3 className="mt-3 text-lg font-semibold text-charcoal truncate">{item.product.title}</h3>
                        <p className="mt-2 text-sm text-[#5a4f44]">{formatCurrency(item.product.price * item.quantity)} · {item.quantity} qty</p>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.variantId)} className="text-sm uppercase tracking-[0.35em] text-[#8c7d68]">
                      Remove
                    </button>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#e2d3bf] pt-6 text-sm text-[#5a4f44]">
                    <p>{formatCurrency(item.product.price)} each</p>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateItem(item.variantId, item.quantity - 1)} className="rounded-full border border-[#c7b69b] px-3 py-2">–</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateItem(item.variantId, item.quantity + 1)} className="rounded-full border border-[#c7b69b] px-3 py-2">+</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="rounded-[32px] border border-[#d7c1ab] bg-[#fff6ee] p-6 text-sm text-[#5b4f43]">
              <div className="flex items-center justify-between mb-4">
                <p>Order total</p>
                <p className="font-semibold text-charcoal">{formatCurrency(total)}</p>
              </div>
              <Link to="/checkout" className="inline-flex rounded-full bg-charcoal px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-ivory transition hover:bg-[#11100f]">
                Continue to checkout
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
