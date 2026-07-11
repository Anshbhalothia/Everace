import { CheckoutShell } from '@components/checkout/CheckoutShell';

export default function CheckoutScreen() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7a6a5f]">Checkout</p>
          <h1 className="text-4xl font-serif text-charcoal">Effortless payment, premium experience.</h1>
          <p className="max-w-3xl text-sm leading-7 text-[#5c5246]">A single-page checkout designed for speed, trust and modern luxury shopping. Razorpay ready, mobile-first and crafted for calm conversion.</p>
        </div>
        <CheckoutShell />
      </div>
    </div>
  );
}
