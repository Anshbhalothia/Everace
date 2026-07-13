import { motion } from 'framer-motion';
import { SectionTitle } from '@components/ui/section-title';
import { Button } from '@components/ui/button';
import { Link } from 'react-router-dom';

export default function StoryPage() {
  // Pure editorial easing curve used across the premium sections of Everace
  const easeQuint = [0.22, 1, 0.36, 1];

  const blockAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.4, ease: easeQuint } 
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 selection:bg-charcoal selection:text-ivory">
      {/* Editorial Header Block - Matching Products/Collections Layout */}
      <div className="mb-16 md:mb-24">
        <SectionTitle
          eyebrow="The Manifesto"
          title="A quiet dedication to origin, extreme rarity, and timeless culinary preservation."
          description="We do not mass-produce, nor do we compromise for speed. We exist exclusively for those who appreciate the poetry of slow patience."
        />
      </div>

      {/* Chapter 1: Split Editorial Canvas Matrix */}
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Left Side Fine Art Canvas Border Frame */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={blockAnimation}
          className="rounded-[40px] border border-[#e4d2bd] bg-[#fffdfa] p-4 shadow-panel"
        >
          <div className="overflow-hidden rounded-[32px] aspect-[4/5] bg-[#fffdfa]">
            {/* REMOVED: grayscale filter to restore native colors */}
            <img 
              src="/images/everace-7.jpeg" 
              alt="Artisanal Pampore Saffron Extraction" 
              className="h-full w-full object-cover hover:scale-105 transition duration-[2.5s] ease-out"
            />
          </div>
        </motion.div>

        {/* Right Side Copy Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={blockAnimation}
          className="space-y-8 lg:pl-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#b99c71] font-semibold">Chapter I</p>
          <h2 className="text-4xl font-serif font-light text-charcoal sm:text-5xl leading-tight">
            Sourced where the earth refuses to compromise.
          </h2>
          <div className="space-y-6 text-sm sm:text-base leading-8 text-[#544a40] font-light">
            <p>
              Our journey began with a single realization: true luxury cannot be manufactured, it can only be collected. Our Kashmiri Saffron is gathered during a fleeting, rare two-week dawn window high in the isolated fields of Pampore, precisely when ambient humidity indexes reach absolute mathematical balance.
            </p>
            <p>
              Each micro-batch yields less than 0.1% of global standard agricultural volumes. It undergoes hand-inspections under rigorous criteria, sealed away into premium glass vessels specifically intended to eliminate ultraviolet organic degradation.
            </p>
          </div>

          {/* Metric Ledger Block */}
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#eadecc]">
            <div>
              <p className="font-serif text-4xl text-charcoal font-light">0.1%</p>
              <p className="text-xs uppercase tracking-widest text-[#7a6a5f] mt-1 font-semibold">Global Harvest Reserve</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-charcoal font-light">100%</p>
              <p className="text-xs uppercase tracking-widest text-[#7a6a5f] mt-1 font-semibold">Traceable Lineage</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chapter 2: Centered Monolith Manifesto Block */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={blockAnimation}
        className="mt-28 md:mt-40 text-center max-w-4xl mx-auto space-y-8 border-t border-[#eadecc] pt-20"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[#7a6a5f] font-semibold">Chapter II</p>
        <blockquote className="text-2xl sm:text-4xl font-serif italic text-[#4a3f35] leading-relaxed max-w-3xl mx-auto">
          "Luxury is the absence of noise. It is the deep presence of deliberate time, heritage preservation, and rare origin purity."
        </blockquote>
        <div className="h-[1px] w-20 bg-[#b99c71] mx-auto my-6" />
        <p className="text-xs uppercase tracking-[0.3em] font-medium text-charcoal">
          The Everace Core Creed
        </p>
      </motion.div>

      {/* Chapter 3: Inverse Split Layout (Text Left / Image Right) */}
      <div className="mt-28 md:mt-40 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left Text Block */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={blockAnimation}
          className="space-y-8 order-2 lg:order-1"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#b99c71] font-semibold">Chapter III</p>
          <h2 className="text-4xl font-serif font-light text-charcoal sm:text-5xl leading-tight">
            Designed for Estate Connoisseurs.
          </h2>
          <p className="text-sm sm:text-base leading-8 text-[#544a40] font-light">
            Our clientele do not merely obtain gourmet items—they acquire micro-lots of raw history. From cold-pressed wellness elixirs to carefully preserved single-estate walnuts, our provisions are tailored for custom gifting suites, private residences, and highly refined culinary spaces.
          </p>
          <div className="pt-4 flex items-center gap-4 text-xs uppercase tracking-[0.25em] font-semibold text-[#7a6a5f]">
            <span>Private Vaults</span>
            <div className="h-1 w-1 rounded-full bg-[#b99c71]" />
            <span>Limited Allocations Only</span>
          </div>
        </motion.div>

        {/* Right Fine Art Frame Image */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={blockAnimation}
          className="rounded-[40px] border border-[#e4d2bd] bg-[#fffdfa] p-4 shadow-panel order-1 lg:order-2"
        >
          <div className="overflow-hidden rounded-[32px] aspect-[4/5] bg-[#fffdfa]">
            {/* REMOVED: grayscale filter to restore native colors */}
            <img 
              src="/images/everace-12.jpeg" 
              alt="Curated Editorial Provisions" 
              className="h-full w-full object-cover hover:scale-105 transition duration-[2.5s] ease-out"
            />
          </div>
        </motion.div>
      </div>

      {/* Footer Closing Call-To-Action Board */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={blockAnimation}
        className="mt-32 rounded-[50px] border border-[#d6c4b0] bg-white/50 backdrop-blur-md p-8 md:p-16 text-center max-w-5xl mx-auto shadow-panel space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[#7a6a5f] font-semibold">Allocation Registry</p>
        <h3 className="text-3xl font-serif text-charcoal sm:text-4xl">Experience the Vault Selection</h3>
        <p className="max-w-2xl mx-auto text-sm leading-7 text-[#544a40] font-light">
          Access the current seasonal provisions database. Members receive exclusive priority notification alerts ahead of limited public parcel extractions.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/products">
            <Button size="lg" className="rounded-full px-8">Explore Collection</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}