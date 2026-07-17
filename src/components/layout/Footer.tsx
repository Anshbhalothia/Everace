import { Link } from 'react-router-dom';
import { CheckoutAction } from '@components/ui/CheckoutAction';

export function Footer() {
  return (
    <footer className="border-t border-[#e4d0ba]/70 bg-ivory/95 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 text-sm text-[#5c5348] sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-serif text-charcoal">EVERACE</p>
          <p className="mt-2 max-w-lg leading-7">Luxury rooted in Indian nature, designed for calm ritual living and premium gifting.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-[#645b50] sm:flex-row sm:items-center sm:gap-8">
          <Link to="/products">Shop</Link>
          <CheckoutAction textOnly>
            Checkout
          </CheckoutAction>
          <Link to="/story">Brand Story</Link>
        </div>
      </div>
    </footer>
  );
}
