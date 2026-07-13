import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useCartStore } from '@store/cart';
import { SlideOverCart } from '@components/cart/SlideOverCart';
import { CheckoutAction } from '@components/ui/CheckoutAction';

const navItems: Array<{ label: string; href: string }> = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/products' },
  { label: 'Story', href: '/story' },
];

export function Navbar() {
  const count = useCartStore((state) => state.count());
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#ece0d3]/60 bg-ivory/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link to="/" className="text-xl font-serif uppercase tracking-[0.4em] text-charcoal">
            EVERACE
          </Link>

          {/* Desktop nav — visible md and up */}
          <nav className="hidden items-center gap-8 text-sm text-[#5b4f42] md:flex">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="transition hover:text-charcoal">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:inline-flex">
              <CheckoutAction textOnly>
                Buy Now
              </CheckoutAction>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="relative rounded-full border border-[#79664d] bg-transparent px-4 py-2 text-sm uppercase tracking-[0.26em] text-charcoal transition hover:bg-ivory"
              onClick={() => setCartOpen(true)}
            >
              Cart{count > 0 ? ` · ${count}` : ''}
            </motion.button>

            {/* Hamburger toggle — visible only below md */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="inline-flex items-center justify-center rounded-full border border-[#79664d] p-2 text-charcoal transition hover:bg-ivory md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel — visible only below md, animated open/close */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-[#ece0d3]/60 bg-ivory/95 md:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-[#5b4f42] transition hover:bg-[#f3e9dc] hover:text-charcoal"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-[#ece0d3]/60 pt-3">
                  <CheckoutAction textOnly>
                    Buy Now
                  </CheckoutAction>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SlideOverCart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
