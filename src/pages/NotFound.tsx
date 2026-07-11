import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm uppercase tracking-[0.35em] text-[#7a6a5f]">404</p>
      <h1 className="mt-4 text-5xl font-serif text-charcoal">Page not found.</h1>
      <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-[#5c5246]">This calm luxury experience is currently unavailable in this path. Return to the EVERACE collection.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full border border-[#b99c71] bg-[#faf2e5] px-6 py-3 text-sm uppercase tracking-[0.35em] text-[#5e513d] transition hover:bg-[#f2e7d7]">
        Return home
      </Link>
    </div>
  );
}
