'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCartStore } from '@store/cart';
import { Button } from '@components/ui/button';
import { formatCurrency } from '@lib/utils';

export const CheckoutShell = () => {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total());
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  if (items.length === 0) {
    return (
      <div className="rounded-[40px] border border-[#e4d2bd] bg-[#fffdfa] p-12 shadow-panel text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a6a5f]">Checkout unavailable</p>
        <h2 className="mt-4 text-4xl font-serif text-charcoal">Your cart is empty.</h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#5c5243]">
          Add a product to your cart before proceeding with checkout.
        </p>
        <div className="mt-10">
          <Link to="/products" className="inline-flex rounded-full bg-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-ivory transition hover:bg-[#11100f]">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-[40px] border border-[#e4d2bd] bg-[#fffdfa] p-8 shadow-panel">
        <p className="text-xs uppercase tracking-[0.35em] text-[#7a6a5f]">Checkout</p>
        <h2 className="mt-4 text-4xl font-serif text-charcoal">Complete your ritual.</h2>
        <div className="mt-10 grid gap-6">
          <div className="rounded-3xl border border-[#d7c1ab] bg-ivory/90 p-6">
            <p className="text-sm text-[#5f533f]">Guest checkout with minimal fields and modern payment readiness.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-[#5c5243]">
              Full name
              <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-3xl border border-[#d7c1ab] bg-white px-4 py-3 text-sm text-[#1c1a18] outline-none focus:border-[#b99c71]" placeholder="Aanya Sharma" />
            </label>
            <label className="grid gap-2 text-sm text-[#5c5243]">
              Mobile
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-3xl border border-[#d7c1ab] bg-white px-4 py-3 text-sm text-[#1c1a18] outline-none focus:border-[#b99c71]" placeholder="+91 98XXXXXXXX" />
            </label>
          </div>
          <label className="grid gap-2 text-sm text-[#5c5243]">
            Delivery address
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={4} className="rounded-3xl border border-[#d7c1ab] bg-white px-4 py-3 text-sm text-[#1c1a18] outline-none focus:border-[#b99c71]" placeholder="Plot 12, New Delhi, 110001" />
          </label>
          <div className="space-y-4 rounded-[32px] border border-[#e4d2bd] bg-white/95 p-6">
            <p className="uppercase tracking-[0.35em] text-[#7b6a59]">Payment</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Button size="lg">Pay with Razorpay</Button>
              <Button variant="outline" size="lg">UPI / Fast pay</Button>
            </div>
            <p className="text-sm text-[#5c5243]">Razorpay integration ready. Apple Pay and UPI-style express flow designed for frictionless luxury checkout.</p>
          </div>
        </div>
      </motion.section>
      <motion.aside initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-[40px] border border-[#e4d2bd] bg-[#f7f0e8] p-8 shadow-soft">
        <p className="text-xs uppercase tracking-[0.35em] text-[#7a6a5f]">Order summary</p>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div key={item.variantId} className="flex items-center justify-between gap-4 rounded-3xl border border-[#e2d3bd] bg-white/90 p-4 text-sm text-[#5e5244]">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-[24px] bg-[#f7f1e8]">
                  {item.product.images?.[0] ? (
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-[#9b8d79]">
                      No image
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{item.product.title}</p>
                  <p>{item.quantity} × {formatCurrency(item.product.price)}</p>
                </div>
              </div>
              <p className="font-semibold text-charcoal">{formatCurrency(item.product.price * item.quantity)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[32px] bg-[#fbf4e8] p-6 text-sm text-[#5c4f44]">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span>Shipping</span>
            <span>₹75</span>
          </div>
          <div className="mt-3 border-t border-[#e0d0bd] pt-4 flex items-center justify-between text-base font-semibold text-charcoal">
            <span>Total</span>
            <span>{formatCurrency(total + 75)}</span>
          </div>
        </div>
      </motion.aside>
    </div>
  );
};
