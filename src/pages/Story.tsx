import { useRef, useState } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
import { Button } from '@components/ui/button';
import { Link } from 'react-router-dom';

/* ---------------------------------------------------------------------- */
/* Image with graceful fallback                                            */
/* ---------------------------------------------------------------------- */
function LedgerImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-[#f7f1e8] to-[#e4d2bd] ${className}`}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#b99c71] font-semibold px-6 text-center">
          {alt}
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
      loading="lazy"
    />
  );
}

/* ---------------------------------------------------------------------- */
/* Checkpoint — an elevation marker sitting on the contour spine           */
/* ---------------------------------------------------------------------- */
type Checkpoint = { topPct: number; elevation: string; label: string; side: 'right' | 'left' };

const CHECKPOINTS: Checkpoint[] = [
  { topPct: 2, elevation: 'SEA LEVEL', label: 'The Ledger Opens', side: 'right' },
  { topPct: 20, elevation: '4,900 FT', label: 'Origin Terroir', side: 'right' },
  { topPct: 45, elevation: 'THE VAULT', label: 'Held in Silence', side: 'left' },
  { topPct: 66, elevation: '6,200 FT', label: 'The Threshold Raised', side: 'right' },
  { topPct: 85, elevation: 'DESCENDING', label: 'To the Patron\u2019s Table', side: 'left' },
  { topPct: 97, elevation: 'DELIVERED', label: 'The Vault Opens', side: 'right' },
];

/** Organic mountain-contour path across a tall viewBox (0 0 100 1000). */
function buildContourPath() {
  return `M50,0
    C 70,40 65,90 50,150
    C 30,220 25,260 50,300
    C 75,340 70,400 45,440
    C 20,480 22,540 50,580
    C 78,620 74,680 50,720
    C 28,760 30,820 55,860
    C 78,900 68,950 50,1000`;
}

function ContourSpine({ scrollYProgress, reduceMotion }: { scrollYProgress: any; reduceMotion: boolean }) {
  return (
    <svg
      aria-hidden
      className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-24 pointer-events-none"
      style={{ height: '100%' }}
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
    >
      <path d={buildContourPath()} fill="none" stroke="#ebdccf" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <motion.path
        d={buildContourPath()}
        fill="none"
        stroke="#b99c71"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        style={{ pathLength: reduceMotion ? 1 : scrollYProgress }}
      />
    </svg>
  );
}

export default function StoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  const easeQuint = [0.22, 1, 0.36, 1] as const;
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.3 : 1, ease: easeQuint } },
  };
  const imageReveal = {
    hidden: reduceMotion ? { opacity: 0 } : { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', scale: 1.08 },
    visible: reduceMotion
      ? { opacity: 1, transition: { duration: 0.3 } }
      : { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', scale: 1, transition: { duration: 1.5, ease: easeQuint } },
  };

  return (
    <div ref={containerRef} className="relative bg-[#fffdfa] text-charcoal selection:bg-charcoal selection:text-ivory overflow-x-hidden">
      <ContourSpine scrollYProgress={scrollYProgress} reduceMotion={!!reduceMotion} />

      <div aria-hidden className="hidden lg:block absolute inset-0 pointer-events-none">
        {CHECKPOINTS.map((cp) => (
          <div
            key={cp.label}
            className={`absolute w-64 ${cp.side === 'right' ? 'left-[calc(50%+3rem)] text-left' : 'right-[calc(50%+3rem)] text-right'}`}
            style={{ top: `${cp.topPct}%` }}
          >
            <p className="font-serif text-sm text-[#b99c71] tracking-wide">{cp.elevation}</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a8a7a]">{cp.label}</p>
          </div>
        ))}
      </div>

      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-center px-4 sm:px-8 mx-auto max-w-7xl pt-28 pb-16">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#b99c71] font-bold block mb-6">
          Everace — A Provenance Record, Read Top to Bottom
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight text-charcoal leading-[1.05] max-w-6xl">
          Every jar has an <span className="italic font-normal text-[#544a40]">altitude.</span>
        </h1>
        <div className="mt-12 pt-12 border-t border-[#ebdccf] grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7a6a5f] font-semibold">An Uncompromising Thesis</p>
          <p className="text-lg sm:text-2xl font-light leading-relaxed text-[#544a40] max-w-3xl">
            This document traces the physical lineage of our provisions—from protected micro-parcels to laboratory confirmation and ultimate allocation. Scroll to examine the timeline.
          </p>
        </div>
      </section>

      {/* CHAPTER I */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-16 lg:py-24 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="space-y-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={imageReveal}
            className="rounded-[40px] border border-[#e4d2bd] bg-[#fffdfa] p-4 shadow-panel overflow-hidden"
          >
            <div className="overflow-hidden rounded-[32px] aspect-[16/10] bg-[#f7f1e8]">
              <LedgerImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjTCeHuG94nTq8zN2S_sn4E_hLwVi4hBOOnhY-W7H1Q&s=10" alt="Pampore Saffron Terroir" />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] text-[#b99c71] font-semibold block">Chapter I — The Inception</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light leading-tight">
              Born in the thin air of the lacustrine plateaus.
            </h2>
            <p className="text-sm sm:text-base leading-8 text-[#544a40] font-light">
              In 2018, in the silt-rich soils of Pampore, Kashmir, a small alliance of
              multi-generational growers and epicurean purists founded Everace. Industrial
              supply chains were demanding speed from soil that needed rest. We chose to defend
              the rest instead.
            </p>
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-12 lg:pt-32">
          <div className="rounded-3xl border border-[#e2d4c0] bg-[#fbf6ef] p-8 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#7b6954] font-semibold">The Core Principle</h4>
            <p className="text-sm leading-7 text-[#5d5143] font-light">
              Modern cultivation prizes predictability. We isolate micro-parcels whose yield
              shifts year to year, and treat that variation as the point, not a flaw to
              engineer away.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-[#eadecc] pt-8">
            <div>
              <p className="font-serif text-5xl text-charcoal font-light">0.1%</p>
              <p className="text-[10px] uppercase tracking-widest text-[#7a6a5f] mt-2 font-semibold">Global Saffron Yield Qualified</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-charcoal font-light">4,900ft</p>
              <p className="text-[10px] uppercase tracking-widest text-[#7a6a5f] mt-2 font-semibold">Minimum Terroir Altitude</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CHAPTER II — descent into the vault */}
      <section className="bg-charcoal text-[#fffdfa] py-24 lg:py-40 my-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-5xl px-4 sm:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.6em] text-[#b99c71] font-semibold block">Chapter II — The Vault</span>
          <p className="text-3xl sm:text-5xl font-serif font-light leading-relaxed max-w-4xl mx-auto italic text-[#f7f1e8]">
            "Luxury isn't the presence of excess. It's the discipline of silence, heritage, and
            unadulterated origin."
          </p>
          <div className="h-[1px] w-24 bg-[#b99c71] mx-auto opacity-60" />
          <p className="text-xs uppercase tracking-[0.3em] text-[#cebdad]">The Everace Custodial Foundation</p>
        </motion.div>
      </section>

      {/* CHAPTER III — climb back up through rigor */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-[#b99c71] font-semibold block">Chapter III — The Threshold Raised</span>
          <h2 className="text-4xl font-serif font-light sm:text-5xl">Three tests. No exceptions.</h2>
          <p className="text-sm sm:text-base leading-8 text-[#544a40] font-light">
            No parcel enters our vaults without surviving every stage below, in order.
          </p>
        </div>
        <div className="relative grid gap-10 md:grid-cols-3">
          <div aria-hidden className="hidden md:block absolute top-6 left-[16.5%] right-[16.5%] h-px bg-[#e4d2bd]" />
          {[
            { n: '01', title: 'HPLC Density Profiling', copy: 'Every micro-lot is tested via High-Performance Liquid Chromatography to map safranal, crocin, and picrocrocin levels. Anything below threshold is rejected.' },
            { n: '02', title: 'Biophotonic Preservation', copy: 'Qualified stock moves into deep violet glass vessels that block light degradation while letting anti-microbial infrared pass through.' },
            { n: '03', title: 'Vault Logistics', copy: 'Allocations are wax-sealed, individually cataloged, and hand-wrapped in archival boxes before temperature-managed delivery.' },
          ].map((step) => (
            <motion.div
              key={step.n}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="relative rounded-3xl border border-[#e4d2bd] bg-white p-8 space-y-5 shadow-soft"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#fffdfa] border border-[#b99c71] font-serif text-lg text-[#b99c71]">
                {step.n}
              </span>
              <h3 className="text-lg uppercase tracking-wider font-medium text-charcoal font-serif">{step.title}</h3>
              <p className="text-xs sm:text-sm leading-6 text-[#544a40] font-light">{step.copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CHAPTER IV — descent to the patron's table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-20 lg:py-28 grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <span className="text-xs uppercase tracking-[0.4em] text-[#b99c71] font-semibold block">Chapter IV — To the Patron's Table</span>
          <h2 className="text-4xl font-serif font-light text-charcoal sm:text-5xl leading-tight">
            Tailored for generational cellars.
          </h2>
          <p className="text-sm sm:text-base leading-8 text-[#544a40] font-light">
            Our collectors aren't buying consumer goods — they're claiming seasonal fragments of
            rare ecosystems. From cold-pressed wellness extracts to air-cured single-estate
            walnuts, our catalog serves private residences, bespoke gifting, and Michelin
            kitchens alike.
          </p>
          <div className="inline-flex items-center gap-6 rounded-full border border-[#cebdad] bg-[#fbf6ef] px-6 py-3 text-xs uppercase tracking-widest font-semibold text-[#7a6a5f]">
            <span>Private Estates Only</span>
            <div className="h-1.5 w-1.5 rounded-full bg-[#b99c71]" />
            <span>Non-Industrialized Continuity</span>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
          variants={imageReveal}
          className="rounded-[40px] border border-[#e4d2bd] bg-[#fffdfa] p-4 shadow-panel order-1 lg:order-2"
        >
          <div className="overflow-hidden rounded-[32px] aspect-[4/5] bg-[#fffdfa]">
            <LedgerImage src="https://walnut.gifts/wp-content/uploads/2020/06/9SBF1-copy.jpg" alt="Bespoke Presentation Box Packaging" />
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-[50px] border border-[#d6c4b0] bg-white p-8 md:p-20 text-center shadow-panel space-y-8 relative overflow-hidden before:absolute before:inset-0 before:bg-[#fbf9f4] before:opacity-40 before:pointer-events-none"
        >
          <div className="relative z-10 space-y-4">
            <span className="text-xs uppercase tracking-[0.5em] text-[#7a6a5f] font-bold block">Delivered</span>
            <h3 className="text-4xl font-serif text-charcoal sm:text-5xl font-light">Access the Private Ledger</h3>
            <p className="max-w-2xl mx-auto text-sm sm:text-base leading-7 text-[#544a40] font-light">
              Public extractions are limited. Registered members get immediate access to current
              micro-lot provisions and priority alerts for upcoming seasonal releases.
            </p>
            <div className="pt-6 flex justify-center">
              <Link to="/products">
                <Button size="lg" className="rounded-full px-10 py-7 text-sm font-medium tracking-widest uppercase bg-charcoal hover:bg-charcoal/90 text-ivory transition-transform duration-300 hover:scale-[1.02]">
                  Enter the Collection
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}