import { useState } from 'react';
import { useCartStore } from '@store/cart';
import { formatCurrency } from '@lib/utils';
import { Button } from '@components/ui/button';
import { Link } from 'react-router-dom';

export const CheckoutShell = () => {
  const { items, total, clear } = useCartStore();
  const cartTotal = total();

  // Form Field States
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');

  // Checkout Flow Lifecycle States
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [mockGeneratedOrderId, setMockGeneratedOrderId] = useState('');

  // Form Validation and Payment Simulation
  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (items.length === 0) {
      setErrorMessage('Your cart is empty. Add items to cart before trying to checkout.');
      return;
    }

    if (!name.trim() || !mobile.trim() || !address.trim()) {
      setErrorMessage('Please completely fill out your delivery name, mobile number, and address fields.');
      return;
    }

    setIsProcessing(true);

    // Simulate Payment Gateway Network Latency 
    setTimeout(() => {
      setIsProcessing(false);
      setIsOrderSuccessful(true);
      setMockGeneratedOrderId('EVR-' + Math.floor(100000 + Math.random() * 900000));
      clear(); // Wipe the Zustand + LocalStorage state clean on purchase success
    }, 2200);
  };

  // SUCCESS STATE SCREEN TEMPLATE (Renders beautifully upon checkout completion)
  if (isOrderSuccessful) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24 text-center animate-fadeIn">
        <div className="rounded-[40px] border border-[#d6c4b0] bg-[#fffdfa] p-8 md:p-12 shadow-panel space-y-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eadecc] border border-[#b99c71]">
            <svg className="h-8 w-8 text-[#5d5143]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[#7a6a5f] font-semibold">Ritual Confirmed</p>
            <h1 className="text-4xl font-serif text-charcoal sm:text-5xl">Thank you for your order.</h1>
            <p className="text-sm text-[#7a6a5f]">Order Tracking ID: <span className="font-mono font-bold text-charcoal">{mockGeneratedOrderId}</span></p>
          </div>

          <div className="border-t border-b border-[#eadecc] py-6 my-6 text-left space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7a6a5f] font-semibold">Estimated Shipment Schedule</p>
            <div className="relative pl-6 space-y-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-0.5 before:bg-[#eadecc]">
              <div className="relative before:absolute before:left-[-23px] before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-charcoal">
                <p className="text-sm font-medium text-charcoal">Order Packed & Prepared</p>
                <p className="text-xs text-[#7a6a5f]">Processing completion and quality appraisal wraps up today.</p>
              </div>
              <div className="relative before:absolute before:left-[-23px] before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-[#cebdad]">
                <p className="text-sm font-medium text-[#7a6a5f]">Dispatched via Luxury Courier</p>
                <p className="text-xs text-[#9c8b7c]">Estimated collection transit initiates within 24 hours.</p>
              </div>
              <div className="relative before:absolute before:left-[-23px] before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-[#cebdad]">
                <p className="text-sm font-medium text-[#7a6a5f]">Delivery Expected</p>
                <p className="text-xs text-[#9c8b7c]">Estimated safe arrival at your address within 3–5 structural business days.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link to="/products">
              <Button size="lg" className="w-full sm:w-auto rounded-full">Continue Collecting</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // STANDARD CHECKOUT BILLING & SUMMARY SCREEN
  return (
   <div className="mx-auto max-w-7xl px-4 pt-0 pb-16 sm:px-6 lg:pb-24">
    
      {items.length === 0 ? (
        <div className="text-center py-20 rounded-[40px] border border-[#e2d1c2] bg-white/60">
          <p className="text-[#5a4f44] text-lg font-medium mb-6">Your shopping cart is currently empty.</p>
          <Link to="/products">
            <Button className="rounded-full">Browse Collection</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Customer Shipping Input Block */}
          <form onSubmit={handleProcessPayment} className="rounded-[40px] border border-[#e2d1c2] bg-white/90 p-8 shadow-panel space-y-6">
            <h2 className="text-2xl font-serif text-charcoal border-b border-[#ebdccf] pb-4">Shipping Information</h2>

            {errorMessage && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-600 font-medium">
                {errorMessage}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#7a6a5f] font-semibold">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter recipient's name"
                disabled={isProcessing}
                className="w-full rounded-2xl border border-[#cebdad] bg-[#fffdfa] px-4 py-3 text-sm text-charcoal focus:border-[#b99c71] focus:outline-none disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#7a6a5f] font-semibold">Mobile Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter 10-digit phone number"
                disabled={isProcessing}
                className="w-full rounded-2xl border border-[#cebdad] bg-[#fffdfa] px-4 py-3 text-sm text-charcoal focus:border-[#b99c71] focus:outline-none disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#7a6a5f] font-semibold">Delivery Address</label>
              <textarea
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Apartment, Street Name, Landmark, City, Pincode"
                disabled={isProcessing}
                className="w-full rounded-2xl border border-[#cebdad] bg-[#fffdfa] px-4 py-3 text-sm text-charcoal focus:border-[#b99c71] focus:outline-none disabled:opacity-50 resize-none"
              />
            </div>

            {/* Premium Method Toggles */}
            <div className="space-y-3 pt-4">
              <label className="text-xs uppercase tracking-wider text-[#7a6a5f] font-semibold">Payment Method</label>
              <div className="grid gap-3 sm:grid-cols-2">
                <div
                  onClick={() => !isProcessing && setPaymentMethod('razorpay')}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
                    paymentMethod === 'razorpay'
                      ? 'border-charcoal bg-[#fbf6ef] ring-1 ring-charcoal'
                      : 'border-[#cebdad] bg-white hover:border-[#b99c71]'
                  } ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-charcoal">Pay with Razorpay</p>
                    <p className="text-xs text-[#7a6a5f]">Cards, Netbanking, UPI</p>
                  </div>
                  <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${paymentMethod === 'razorpay' ? 'border-charcoal' : 'border-[#cebdad]'}`}>
                    {paymentMethod === 'razorpay' && <div className="h-2 w-2 rounded-full bg-charcoal" />}
                  </div>
                </div>

                <div
                  onClick={() => !isProcessing && setPaymentMethod('cod')}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
                    paymentMethod === 'cod'
                      ? 'border-charcoal bg-[#fbf6ef] ring-1 ring-charcoal'
                      : 'border-[#cebdad] bg-white hover:border-[#b99c71]'
                  } ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-charcoal">Cash on Delivery</p>
                    <p className="text-xs text-[#7a6a5f]">Pay currency during courier delivery</p>
                  </div>
                  <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${paymentMethod === 'cod' ? 'border-charcoal' : 'border-[#cebdad]'}`}>
                    {paymentMethod === 'cod' && <div className="h-2 w-2 rounded-full bg-charcoal" />}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full"
                disabled={isProcessing}
              >
                {isProcessing 
                  ? 'Connecting Secure Gateways...' 
                  : paymentMethod === 'razorpay' 
                    ? `Securely Pay ${formatCurrency(cartTotal)}` 
                    : `Confirm Cash Order of ${formatCurrency(cartTotal)}`
                }
              </Button>
            </div>
          </form>

          {/* Cart Bill Summary Drawer */}
          <aside className="space-y-6 rounded-[40px] border border-[#d6c4b0] bg-[#fffdfa] p-8 shadow-panel lg:sticky lg:top-20">
            <h2 className="text-2xl font-serif text-charcoal border-b border-[#ebdccf] pb-4">Bag Summary</h2>
            <div className="max-h-60 overflow-y-auto divide-y divide-[#ebdccf] pr-2">
              {items.map((item) => {
                const matchedVariant = item.product.variants?.find(v => v.id === item.variantId);
                const currentPrice = matchedVariant && 'price' in matchedVariant ? (matchedVariant as any).price : item.product.price;
                const activeLabel = (matchedVariant as any)?.size || (matchedVariant as any)?.weight || (matchedVariant as any)?.type || 'Standard';

                return (
                  <div key={item.variantId} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                    <img src={item.product.images[0]} alt={item.product.title} className="h-14 w-14 rounded-xl object-cover border border-[#e2d1c2]" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-charcoal truncate">{item.product.title}</p>
                      <p className="text-xs text-[#7a6a5f]">Option: <span className="uppercase font-semibold">{activeLabel}</span> • Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-charcoal">{formatCurrency(currentPrice * item.quantity)}</p>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-[#ebdccf] pt-4 space-y-3 text-sm">
              <div className="flex justify-between text-[#5a4f44]">
                <span>Items Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-[#5a4f44]">
                <span>Premium Delivery Service</span>
                <span className="text-green-700 font-medium">Complimentary</span>
              </div>
              <div className="flex justify-between border-t border-[#ebdccf] pt-3 text-lg font-serif font-semibold text-charcoal">
                <span>Total Bill Amount</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};
