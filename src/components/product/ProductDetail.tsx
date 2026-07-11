import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@components/ui/button';
import { Badge } from '@components/ui/badge';
import { useCartStore } from '@store/cart';
import { formatCurrency } from '@lib/utils';
import type { Product } from '@product/product';

export const ProductDetail = ({ product }: { product: Product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const updateItem = useCartStore((state) => state.updateItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const variantId = product.variants[0].id;
  const cartQuantity = useCartStore((state) => state.items.find((item) => item.variantId === variantId)?.quantity ?? 0);

  const handleAddToCart = () => {
    addItem(product, variantId, quantity);
  };

  const handleDecrease = () => {
    if (cartQuantity <= 1) {
      removeItem(variantId);
      setQuantity(1);
      return;
    }
    updateItem(variantId, cartQuantity - 1);
  };

  const handleIncrease = () => {
    updateItem(variantId, cartQuantity + 1);
  };

  return (
    <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
      <div className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-[1.6fr_0.9fr]">
          <div className="rounded-[40px] border border-[#e4d2bd] bg-[#fffdfa] p-4 shadow-soft">
            <img src={selectedImage} alt={product.title} className="h-full w-full rounded-[32px] object-cover" />
          </div>
          <div className="grid gap-4">
            {product.images.map((image) => (
              <button key={image} onClick={() => setSelectedImage(image)} className="overflow-hidden rounded-[28px] border border-[#ddd0be] bg-[#f7f1e8] transition hover:border-[#b99c71]">
                <img src={image} alt={product.title} className="h-36 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-[40px] border border-[#e4d2bd] bg-white/95 p-8 shadow-panel">
          <div className="flex flex-wrap items-center gap-4">
            <Badge label={product.badge ?? 'Rare'} />
            <p className="text-sm uppercase tracking-[0.28em] text-[#7a6a5f]">{product.category}</p>
          </div>
          <h1 className="text-5xl font-serif leading-tight text-charcoal sm:text-6xl">{product.title}</h1>
          <p className="max-w-3xl text-base leading-8 text-[#544a40]">{product.description}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#e2d4c0] bg-[#fbf6ef] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#7b6954]">Origin</p>
              <p className="mt-4 text-sm leading-7 text-[#5d5143] whitespace-pre-line">{product.origin}</p>
            </div>
            <div className="rounded-3xl border border-[#e2d4c0] bg-[#faf5ed] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#7b6954]">Story</p>
              <p className="mt-4 text-sm leading-7 text-[#5d5143]">{product.story}</p>
            </div>
          </div>
        </div>
      </div>
      <aside className="space-y-8 rounded-[40px] border border-[#d6c4b0] bg-[#fffdfa] p-8 shadow-panel lg:sticky lg:top-20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7a6a5f]">From the Valleys of Purity</p>
          <p className="text-4xl font-serif text-charcoal">{formatCurrency(product.price)}</p>
          <p className="text-sm leading-7 text-[#5a4f44]">A premium ritual purchase with fast checkout and expressive Indian luxury design.</p>
        </div>
        <div className="grid gap-3">
          {cartQuantity > 0 ? (
            <div className="inline-flex items-center gap-3 rounded-full border border-[#cebdad] bg-ivory px-4 py-3 text-sm text-[#5d5143]">
              Quantity
              <div className="ml-auto flex items-center gap-2">
                <button onClick={handleDecrease} className="rounded-full border border-[#c7b69b] px-3 py-2">–</button>
                <span>{cartQuantity}</span>
                <button onClick={handleIncrease} className="rounded-full border border-[#c7b69b] px-3 py-2">+</button>
              </div>
            </div>
          ) : (
            <Button size="lg" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
         
        </div>
        <div className="rounded-3xl border border-[#e1d3c1] bg-white/95 p-6 text-sm text-[#544a40]">
          <p className="uppercase tracking-[0.35em] text-[#7d6d55]">Ingredients</p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            {product.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </aside>
      <section className="lg:col-span-full">
        <div className="grid gap-6 rounded-[40px] border border-[#e4d2bd] bg-[#fffcf7] p-8 shadow-soft sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-serif text-charcoal">Kashmir origins, editorial elegance.</h2>
            <p className="mt-4 text-sm leading-7 text-[#5a4f44]">Crafted with calm precision and luxury Indian aesthetics, every detail of this product is designed to feel premium without flash.</p>
          </div>
          <div className="space-y-4 text-sm leading-7 text-[#5a4f44]">
            {product.details.map((detail) => (
              <p key={detail}>• {detail}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
