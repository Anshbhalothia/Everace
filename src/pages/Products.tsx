import { useState } from 'react';
import { products, categories } from '@lib/data';
import { ProductCard } from '@components/product/ProductCard';
import { SectionTitle } from '@components/ui/section-title';
import { Button } from '@components/ui/button';

export default function ProductsPage() {
  // 1. Establish state to track the active category filter slug
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // 2. Filter products dynamically based on the selected category slug
  const filteredProducts = activeCategory
    ? products.filter((product) => {
        // Find matching category to extract slug safely if categories match by title
        const matchesCategory = categories.find(
          (c) => c.title.toLowerCase() === product.category.toLowerCase()
        );
        return matchesCategory?.slug === activeCategory;
      })
    : products;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-10">
        <SectionTitle
          eyebrow="Collection"
          title="A calm gallery of premium wellness and gourmet essentials."
          description="Discover quiet favorites designed for gifting, rituals, and everyday luxury."
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.35fr_0.9fr] lg:items-start">
        <aside className="rounded-[40px] border border-[#e2d1c2] bg-white/90 p-8 shadow-panel lg:sticky lg:top-20">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7a6a5f] font-semibold">Filter by category</p>
          <div className="mt-6 space-y-3">
            {/* All Products button toggles active state to null */}
            <button 
              onClick={() => setActiveCategory(null)}
              className={`w-full rounded-full border px-5 py-3 text-left text-sm font-medium transition duration-300 ${
                activeCategory === null
                  ? 'border-charcoal bg-charcoal text-ivory'
                  : 'border-[#d8cbb8] bg-ivory text-[#5d5143] hover:border-[#b99c71] hover:bg-[#fbf4e8]'
              }`}
            >
              All Products
            </button>
            
            {/* Map over categories and handle active clicks */}
            {categories.map((category) => {
              const isActive = activeCategory === category.slug;
              return (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`w-full rounded-full border px-5 py-3 text-left text-sm font-medium transition duration-300 ${
                    isActive
                      ? 'border-charcoal bg-charcoal text-ivory'
                      : 'border-[#d8cbb8] bg-ivory text-[#5d5143] transition hover:border-[#b99c71] hover:bg-[#fbf4e8]'
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
          <div className="mt-10 space-y-4 rounded-3xl border border-[#ede1d4] bg-[#faf5ee] p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#796d5e] font-semibold">Premium service</p>
            <p className="text-sm leading-7 text-[#5a4f44]">Fast luxury checkout, curated recommendations and stock alerts for EVERACE members.</p>
            <Button variant="outline" className="w-full">Learn more</Button>
          </div>
        </aside>

        <div>
          {/* Display zero state gracefully if no items match */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 rounded-[40px] border border-[#e2d1c2] bg-white/60">
              <p className="text-[#5a4f44] text-lg font-medium">No items available in this selection yet.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}