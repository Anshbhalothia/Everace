import { products, categories } from '@lib/data';
import { ProductCard } from '@components/product/ProductCard';
import { SectionTitle } from '@components/ui/section-title';
import { Button } from '@components/ui/button';

export default function ProductsPage() {
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
            <button className="w-full rounded-full border border-[#d8cbb8] bg-charcoal text-ivory px-5 py-3 text-left text-sm font-medium transition hover:border-[#b99c71]">
              All Products
            </button>
            {categories.map((category) => (
              <button key={category.slug} className="w-full rounded-full border border-[#d8cbb8] bg-ivory px-5 py-3 text-left text-sm font-medium text-[#5d5143] transition hover:border-[#b99c71] hover:bg-[#fbf4e8]">
                {category.title}
              </button>
            ))}
          </div>
          <div className="mt-10 space-y-4 rounded-3xl border border-[#ede1d4] bg-[#faf5ee] p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#796d5e] font-semibold">Premium service</p>
            <p className="text-sm leading-7 text-[#5a4f44]">Fast luxury checkout, curated recommendations and stock alerts for EVERACE members.</p>
            <Button variant="outline" className="w-full">Learn more</Button>
          </div>
        </aside>

        <div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
