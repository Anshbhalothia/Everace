export function createRazorpayOrder(amount: number, currency = 'INR') {
  // Implementation should call a secure server endpoint to create Razorpay order.
  return {
    id: 'order_DBJOWzybf0sJbb',
    amount,
    currency,
    status: 'created',
  };
}

export const razorpayOptions = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY || 'YOUR_RAZORPAY_KEY',
  name: 'EVERACE',
  description: 'Premium wellness and gourmet checkout',
  theme: {
    color: '#4d432f',
  },
};
