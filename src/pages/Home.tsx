import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { heroImages, categories, testimonials, products } from '@lib/data';
import { SectionTitle } from '@components/ui/section-title';
import { Button } from '@components/ui/button';
import { CheckoutAction } from '@components/ui/CheckoutAction';
import { ProductCard } from '@components/product/ProductCard';
import type { Product } from '@product/product';

// Helper function to safely extract random distinct items
const getRandomProducts = (allProducts: Product[], count: number): Product[] => {
  return [...allProducts]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

function useRotatingImages(
  images: string[],
  visibleCount: number,
  interval: number
): string[] {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (images.length <= visibleCount) return;
    const id = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, visibleCount, interval]);

  return Array.from(
    { length: visibleCount },
    (_, i) => images[(startIndex + i) % images.length]
  );
}

function HeroTile({ src, slot }: { src: string; slot: number }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#e4d2bd] bg-[#faf5ee] p-2 shadow-panel">
      <div className="grid overflow-hidden rounded-[28px]">
        <AnimatePresence initial={false}>
          <motion.img
            key={src}
            src={src}
            alt={`Everace hero ${slot + 1}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="col-start-1 row-start-1 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function HomePage() {
  const visibleHeroImages = useRotatingImages(heroImages, 4, 3500);

  // Safely memorize 3 random items right here so state re-renders don't cause sudden shifts
  const randomizedBestsellers = useMemo(() => {
    return getRandomProducts(products, 3);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:pt-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-2xl space-y-8 py-10 lg:py-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#5a4f42] font-semibold">EVERACE Premium</p>
            <h1 className="text-5xl font-serif leading-tight text-charcoal sm:text-6xl font-bold">Luxury from the valleys of purity.</h1>
            <p className="max-w-xl text-lg leading-9 text-charcoal sm:text-xl font-medium">
              A calm editorial shopping experience for curated dry fruits, saffron, honey and ritual wellness essentials.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/products">
                <Button size="lg">Explore the collection</Button>
              </Link>
              <CheckoutAction textOnly>
                Checkout
              </CheckoutAction>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {visibleHeroImages.map((src, slot) => (
              <HeroTile key={slot} src={src} slot={slot} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* BEST SELLERS SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <SectionTitle
          eyebrow="Best Sellers"
          title="Quietly luxurious staples for rituals and gifting."
          description="Every product is chosen to feel premium, minimal, and naturally elegant."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Now uses the safely scrambled local hook state array */}
          {randomizedBestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-24">
        <div className="rounded-[40px] border border-[#d4c3b2] bg-white/85 p-8 shadow-panel sm:p-12">
          <SectionTitle
            eyebrow="Categories"
            title="A refined selection of every premium ritual category."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <article key={item.slug} className="rounded-3xl border border-[#e3d5c2] bg-ivory/90 p-6 transition hover:border-[#b99c71] hover:shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-[#76654f]">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-[#5a4f44]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY SECTION */}
      <section
        id="story"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] lg:items-stretch">
          {/* Left Card */}
          <div className="h-full space-y-6 rounded-[40px] border border-[#e4d2bd] bg-[#fffdf9] p-10 shadow-panel sm:p-14">
            <SectionTitle
              eyebrow="Brand Story"
              title="Crafted for conscious luxury."
            />
            <p className="max-w-xl text-base leading-8 text-[#51473f]">
              EVERACE brings together minimal luxury and Indian heritage with
              products that feel editorial, warm and elegantly quiet. Each item is
              presented like a ritual object, not just a commodity.
            </p>

            <div className="space-y-4 text-sm text-[#5f5348]">
              <p>Designed to feel premium without flash.</p>
              <p>Built for modern rituals and thoughtful gifting.</p>
              <p>
                Crafted from Kashmir, honey orchards, saffron fields and pure
                wellness traditions.
              </p>
            </div>
          </div>

          <div className="grid h-full gap-6 sm:grid-cols-2">
            <div className="rounded-[32px] border border-[#e5d4c2] bg-[#f7f1e8] p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-[#7e6b58]">Editorial ritual</p>
              <h3 className="mt-4 text-2xl font-serif leading-tight text-charcoal">The art of pure living.</h3>
              <p className="mt-4 text-sm leading-7 text-[#5a4f44]">A slow, intentional brand voice built for cleansing the digital noise.</p>
            </div>
            <div className="rounded-[32px] border border-[#e5d4c2] bg-[#f8f3ea] p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-[#7e6b58]">Design direction</p>
              <h3 className="mt-4 text-2xl font-serif leading-tight text-charcoal">Minimal, calm, editorial.</h3>
              <p className="mt-4 text-sm leading-7 text-[#5a4f44]">A luxury quietness with warm textures, soft lighting and premium product presence.</p>
            </div>
            <div className="rounded-[32px] border border-[#e5d4c2] bg-[#f8f3ea] p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-[#7e6b58]">Design direction</p>
              <h3 className="mt-4 text-2xl font-serif leading-tight text-charcoal">Minimal, calm, editorial.</h3>
              <p className="mt-4 text-sm leading-7 text-[#5a4f44]">A luxury quietness with warm textures, soft lighting and premium product presence.</p>
            </div>
            <div className="rounded-[32px] border border-[#e5d4c2] bg-[#f7f1e8] p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-[#7e6b58]">Editorial ritual</p>
              <h3 className="mt-4 text-2xl font-serif leading-tight text-charcoal">The art of pure living.</h3>
              <p className="mt-4 text-sm leading-7 text-[#5a4f44]">A slow, intentional brand voice built for cleansing the digital noise.</p>
            </div>
          </div>
        </div>
      </section>



      {/* DYNAMIC LUXURY TESTIMONIALS SLIDER */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:pb-28">
        <SectionTitle eyebrow="Testimonials" title="Refined voices from the wellness community." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-[32px] border border-[#e2d4c0] bg-white/90 p-8 shadow-soft">
              <p className="text-base leading-8 text-[#5c5347]">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm text-[#5c5044]">
                <p className="font-semibold text-charcoal">{testimonial.author}</p>
                <p>{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      
    </div>
  );
}

      {/* DYNAMIC LUXURY TESTIMONIALS SLIDER */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:pb-28">
        <SectionTitle eyebrow="Testimonials" title="Refined voices from the wellness community." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-[32px] border border-[#e2d4c0] bg-white/90 p-8 shadow-soft">
              <p className="text-base leading-8 text-[#5c5347]">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm text-[#5c5044]">
                <p className="font-semibold text-charcoal">{testimonial.author}</p>
                <p>{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      
     

