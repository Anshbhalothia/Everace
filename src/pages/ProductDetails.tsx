import { useParams, Link } from 'react-router-dom';
import { products } from '@lib/data';
import { ProductDetail } from '@components/product/ProductDetail';

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a6a5f]">Product not found</p>
        <h1 className="mt-4 text-4xl font-serif text-charcoal">This ritual item is missing.</h1>
        <Link to="/products" className="mt-8 inline-flex rounded-full border border-[#b99c71] bg-[#faf2e5] px-6 py-3 text-sm uppercase tracking-[0.35em] text-[#5e513d] transition hover:bg-[#f2e7d7]">
          Browse the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#7c6e5f]">Premium product</p>
          <h1 className="mt-3 text-4xl font-serif text-charcoal sm:text-5xl">{product.title}</h1>
        </div>
        <Link to="/products" className="text-sm uppercase tracking-[0.35em] text-[#655b4f] transition hover:text-charcoal">
          Back to collection
        </Link>
      </div>
      <ProductDetail product={product} />
    </div>
  );
}
