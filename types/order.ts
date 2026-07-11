export type CheckoutPayload = {
  name: string;
  phone: string;
  address: string;
  items: Array<{ productId: string; variantId: string; quantity: number }>;
  paymentMethod: 'razorpay' | 'upi' | 'cod';
  couponCode?: string;
};

export type Order = {
  id: string;
  userId?: string;
  items: Array<{ productId: string; variantId: string; quantity: number; price: number }>;
  total: number;
  status: 'created' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
};
