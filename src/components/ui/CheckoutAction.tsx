import { useEffect, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@store/cart';
import { Button } from '@components/ui/button';
import { cn } from '@lib/utils';

type CheckoutActionProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'md' | 'lg';
  textOnly?: boolean;
  onSuccess?: () => void;
};

export function CheckoutAction({
  children,
  className,
  variant = 'ghost',
  size = 'md',
  textOnly = false,
  onSuccess,
}: CheckoutActionProps) {
  const navigate = useNavigate();
  const count = useCartStore((state) => state.count());
  const [message, setMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastProgress, setToastProgress] = useState(100);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [toastType, setToastType] = useState<'error' | 'success'>('error');
  const TOAST_DURATION = 2200; // ms

  useEffect(() => {
    if (!message) {
      setToastVisible(false);
      setToastProgress(100);
      setIsFadingOut(false);
      return;
    }

    setToastVisible(true);
    setToastProgress(100);
    setIsFadingOut(false);

    const interval = window.setInterval(() => {
      setToastProgress((prev) =>
        Math.max(prev - (100 / (TOAST_DURATION / 130)), 0)
      );
    }, 100);

    const fadeTimer = window.setTimeout(() => {
      setIsFadingOut(true);
    }, TOAST_DURATION - 300);

    const hideTimer = window.setTimeout(() => {
      setToastVisible(false);
      setMessage('');
      setIsFadingOut(false);
      setToastProgress(100);
    }, TOAST_DURATION);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
      window.clearInterval(interval);
    };
  }, [message]);

  const handleClick = () => {
    if (count === 0) {
      setToastType('error');
      setMessage('Add a product to cart before checking out.');
      return;
    }

    setToastType('success');
    setMessage('Proceeding to checkout...');
    onSuccess?.();
    navigate('/checkout');
  };

  return (
    <>
      <div className={cn('flex flex-col items-start', className)}>
        {textOnly ? (
          <button
            type="button"
            onClick={handleClick}
            className="text-sm uppercase tracking-[0.35em] transition hover:text-charcoal"
          >
            {children}
          </button>
        ) : (
          <Button variant={variant} size={size} onClick={handleClick}>
            {children}
          </Button>
        )}
      </div>
      {toastVisible ? (
        <div
          role="alert"
          aria-live="assertive"
          className={cn(
            'fixed top-20 left-1/2 z-50 w-[min(90vw,32rem)] -translate-x-1/2 rounded-3xl border border-[#d7c1ab] bg-[#fffdfa] px-5 py-4 text-base font-semibold text-charcoal shadow-xl shadow-[#c4af96]/30 transition-all duration-300 ease-out',
            isFadingOut ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
          )}
        >
          <div className="relative flex items-start gap-4">
            <div className="flex-1 pr-2">{message}</div>
            <button
              type="button"
              onClick={() => {
                setToastVisible(false);
                setMessage('');
              }}
              aria-label="Close notification"
              className="rounded-full p-1 text-charcoal transition hover:bg-[#f7f1e8] focus:outline-none focus:ring-2 focus:ring-[#d7c1ab]"
            >
              ×
            </button>
          </div>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#f2e7d7]">
            <div
              className="h-full bg-[#b99c71] transition-[width] duration-100 ease-linear"
              style={{ width: `${toastProgress}%` }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
