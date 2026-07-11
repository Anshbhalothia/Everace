import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCartStore } from '@store/cart';
import { SlideOverCart } from '@components/cart/SlideOverCart';
import { CheckoutAction } from '@components/ui/CheckoutAction';

const navItems: Array<{ label: string; href: string }> = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/products' },
  { label: 'Story', href: '/#story' },
];

export function Navbar() {
  const count = useCartStore((state) => state.count());
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#ece0d3]/60 bg-ivory/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <Link to="/" className="text-xl font-serif uppercase tracking-[0.4em] text-charcoal">
            EVERACE
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[#5b4f42] md:flex">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="transition hover:text-charcoal">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden md:inline-flex">
              <CheckoutAction textOnly>
                Buy Now
              </CheckoutAction>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="relative rounded-full border border-[#79664d] bg-transparent px-4 py-2 text-sm uppercase tracking-[0.26em] text-charcoal transition hover:bg-ivory"
              onClick={() => setOpen(true)}
            >
              Cart{count > 0 ? ` · ${count}` : ''}
            </motion.button>
          </div>
        </div>
      </header>
      <SlideOverCart open={open} onClose={() => setOpen(false)} />
    </>
  );
}
