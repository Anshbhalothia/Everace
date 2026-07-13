import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Badge } from '@components/ui/badge';
import { useCartStore } from '@store/cart';
import { formatCurrency } from '@lib/utils';
import type { Product } from '@product/product';

export const ProductDetail = ({ product }: { product: Product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  
  // Initialize with the exact first variant from data.ts
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const addItem = useCartStore((state) => state.addItem);
  const updateItem = useCartStore((state) => state.updateItem);
  const removeItem = useCartStore((state) => state.removeItem);
  
  // Track quantities dynamically using the variant ID
  const cartQuantity = useCartStore((state) => 
    state.items.find((item) => item.variantId === selectedVariant.id)?.quantity ?? 0
  );

  const handleAddToCart = () => {
    addItem(product, selectedVariant.id, quantity);
  };

  const handleDecrease = () => {
    if (cartQuantity <= 1) {
      removeItem(selectedVariant.id);
      setQuantity(1);
      return;
    }
    updateItem(selectedVariant.id, cartQuantity - 1);
  };

  const handleIncrease = () => {
    updateItem(selectedVariant.id, cartQuantity + 1);
  };

  // Extract the individual variant's unique pricing model
  const currentDisplayPrice = selectedVariant.price || product.price;

  return (
    <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
      
      {/* LEFT ASPECT CANVAS LAYER */}
      <div className="space-y-10">
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

        {/* Master Details Panel */}
        <div className="space-y-6 rounded-[40px] border border-[#e4d2bd] bg-white/95 p-8 shadow-panel">
          <div className="flex flex-wrap items-center gap-4">
            <Badge label={product.badge ?? 'Rare Reserve'} />
            <p className="text-sm uppercase tracking-[0.28em] text-[#7a6a5f]">{product.category}</p>
          </div>
          <h1 className="text-5xl font-serif font-light text-charcoal sm:text-6xl">{product.title}</h1>
          <p className="max-w-3xl text-base leading-8 text-[#544a40] font-light">{product.description}</p>
          
          <div className="grid gap-6 sm:grid-cols-2 pt-4">
            <div className="rounded-3xl border border-[#e2d4c0] bg-[#fbf6ef] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#7b6954] font-semibold">Micro-Terroir Origin</p>
              <p className="mt-4 text-sm leading-7 text-[#5d5143] whitespace-pre-line">{product.origin}</p>
            </div>
            <div className="rounded-3xl border border-[#e2d4c0] bg-[#faf5ed] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#7b6954] font-semibold">Taste Profile</p>
              <p className="mt-4 text-sm leading-7 text-[#5d5143]">{product.taste}</p>
            </div>
          </div>
        </div>

        {/* Dynamic Storytelling Chronology Timeline */}
        {product.storyStages && product.storyStages.length > 0 && (
          <div className="rounded-[40px] border border-[#e4d2bd] bg-white p-8 shadow-panel space-y-8">
            <div className="space-y-2 border-b border-[#ebdccf] pb-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[#b99c71] font-semibold">The Sourcing Chronicles</p>
              <h2 className="text-3xl font-serif text-charcoal">The Slow Architecture of Sourcing</h2>
            </div>

            <div className="relative border-l border-[#eadecc] pl-8 ml-4 space-y-10">
              {product.storyStages.map((stageItem, index) => (
                <div key={index} className="relative before:absolute before:left-[-41px] before:top-1 before:flex before:h-5 before:w-5 before:items-center before:justify-center before:rounded-full before:ring-4 before:ring-ivory odd:before:bg-charcoal even:before:bg-[#b99c71]">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#7a6a5f] font-semibold block">{stageItem.stage}</span>
                  <h3 className="text-xl font-serif text-charcoal mt-1">{stageItem.title}</h3>
                  <p className="text-sm leading-7 text-[#544a40] font-light mt-2">{stageItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RIGHT ASPECT SIDEBAR ACTION BOX */}
      <aside className="space-y-8 rounded-[40px] border border-[#d6c4b0] bg-[#fffdfa] p-8 shadow-panel lg:sticky lg:top-20 h-fit">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7a6a5f]">Limited Allocation Parcel</p>
          <p className="text-4xl font-serif text-charcoal">{formatCurrency(currentDisplayPrice)}</p>
          <p className="text-sm leading-7 text-[#5a4f44] font-light">A rare investment in pure sensory heritage. Includes complimentary signature presentation vault wrapping.</p>
        </div>

        {/* Dynamic Format Selector - Fixed explicitly to use variant.label */}
        {product.variants && product.variants.length > 1 && (
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#7a6a5f] font-semibold">Select Presentation Format</p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant) => {
                const isSelected = selectedVariant.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition duration-300 ${
                      isSelected ? 'border-charcoal bg-charcoal text-ivory' : 'border-[#cebdad] bg-ivory text-[#5d5143] hover:border-[#b99c71]'
                    }`}
                  >
                    {variant.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid gap-3">
          {cartQuantity > 0 ? (
            <div className="inline-flex items-center gap-3 rounded-full border border-[#cebdad] bg-ivory px-4 py-3 text-sm text-[#5d5143] w-full">
              Quantity Selected
              <div className="ml-auto flex items-center gap-2">
                <button onClick={handleDecrease} className="rounded-full border border-[#c7b69b] px-3 py-2 text-center select-none font-medium transition hover:bg-[#faf5ee]">–</button>
                <span className="w-6 text-center font-medium">{cartQuantity}</span>
                <button onClick={handleIncrease} className="rounded-full border border-[#c7b69b] px-3 py-2 text-center select-none font-medium transition hover:bg-[#faf5ee]">+</button>
              </div>
            </div>
          ) : (
            <Button size="lg" className="w-full rounded-full" onClick={handleAddToCart}>
              Secure Allocation
            </Button>
          )}
        </div>
        
        {/* Ingredient Breakdown */}
        <div className="rounded-3xl border border-[#e1d3c1] bg-white/95 p-6 text-sm text-[#544a40]">
          <p className="uppercase tracking-[0.35em] text-[#7d6d55] font-semibold">Purity Profile</p>
          <ul className="mt-4 space-y-2 list-disc pl-5 font-light">
            {product.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Dynamic Terroir Metric Ledger Table */}
        {product.ledger && (
          <div className="rounded-3xl border border-[#b99c71]/40 bg-[#fbf9f4] p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b99c71] font-semibold">Vault Appraisal Ledger</p>
            <div className="divide-y divide-[#eadecc] text-xs space-y-3">
              <div className="flex justify-between pt-2 first:pt-0">
                <span className="text-[#7a6a5f]">Harvest Frequency</span>
                <span className="font-serif font-medium text-charcoal">{product.ledger.harvest}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="text-[#7a6a5f]">Artisan Registry</span>
                <span className="font-serif font-medium text-charcoal">{product.ledger.artisan}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="text-[#7a6a5f]">Chemical Composition</span>
                <span className="font-serif font-medium text-green-800">{product.ledger.purity}</span>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Technical Overview Section */}
      <section className="lg:col-span-full">
        <div className="grid gap-6 rounded-[40px] border border-[#e4d2bd] bg-[#fffcf7] p-8 shadow-soft sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-serif text-charcoal">Kashmir origins, editorial elegance.</h2>
            <p className="mt-4 text-sm leading-7 text-[#5a4f44] font-light">Crafted with calm precision and luxury Indian aesthetics, every detail of this product is designed to feel premium without flash.</p>
          </div>
          <div className="space-y-4 text-sm leading-7 text-[#5a4f44] font-light">
            {product.details.map((detail) => (
              <p key={detail}>• {detail}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};