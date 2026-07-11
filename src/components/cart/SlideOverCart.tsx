import { useCartStore } from '@store/cart';
import { formatCurrency } from '@lib/utils';
import { CheckoutAction } from '@components/ui/CheckoutAction';

export function SlideOverCart({ open, onClose }: { open: boolean; onClose: () => void }) {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateItem = useCartStore((state) => state.updateItem);
  const total = useCartStore((state) => state.total());

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/30"
        onClick={onClose}
      />
      <aside
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col overflow-hidden border-l border-[#d7c1ab] bg-ivory shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-[#e2d5c2] bg-white/95 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-charcoal">Your Cart</h2>
              <p className="text-sm text-[#5b5245]">
                {items.length > 0 ? `${items.length} item${items.length > 1 ? 's' : ''}` : 'No items in cart yet.'}
              </p>
            </div>
            <button onClick={onClose} className="text-2xl text-charcoal hover:text-walnut">
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 pt-5">
          {items.length === 0 ? (
            <div className="rounded-3xl border border-[#d7c8b4] bg-white p-8 text-center text-sm text-[#5b5245]">
              Your cart is calm and ready.
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.variantId} className="rounded-[32px] border border-[#d7c1ab] bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 overflow-hidden rounded-[24px] bg-[#f7f1e8]">
                        {item.product.images?.[0] ? (
                          <img
                            src={item.product.images[0]}
                            alt={item.product.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs text-[#9b8d79]">
                            No image
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-[#7a6a5f]">{item.product.category ?? 'Item'}</p>
                        <h3 className="mt-2 text-lg font-semibold text-charcoal">{item.product.title ?? 'Unnamed product'}</h3>
                        <p className="mt-3 text-sm text-[#5a4f44]">{formatCurrency(item.product.price)} · {item.quantity} qty</p>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.variantId)} className="text-xs uppercase tracking-[0.3em] text-[#8b7d6c]">
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 text-sm text-[#4f473f]">
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateItem(item.variantId, item.quantity - 1)} className="rounded-full border border-[#c7b69b] px-3 py-2">–</button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button onClick={() => updateItem(item.variantId, item.quantity + 1)} className="rounded-full border border-[#c7b69b] px-3 py-2">+</button>
                    </div>
                    <span className="text-sm font-medium text-[#5b5245]">{formatCurrency(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#e2d5c2] bg-white/95 px-6 py-4">
          <div className="mb-4 flex items-center justify-between font-semibold text-charcoal">
            <span>Subtotal:</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <CheckoutAction variant="primary" size="md" className="w-full" onSuccess={onClose}>
            Proceed to Checkout
          </CheckoutAction>
        </div>
      </aside>
    </>
  );
}
