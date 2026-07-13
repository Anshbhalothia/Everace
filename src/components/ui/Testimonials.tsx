import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@lib/data'; // Directly uses your existing data array!

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Slow, deliberate rotation suited for an elite audience
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#fbf9f4] py-24 sm:py-32 border-t border-b border-[#eadecc] overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#7a6a5f] font-semibold mb-12">
          Connoisseur Appraisals
        </p>

        <div className="relative min-h-[180px] sm:min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-6 absolute w-full"
            >
              <p className="font-serif text-2xl md:text-3xl italic text-charcoal leading-relaxed max-w-3xl mx-auto">
                "{testimonials[index].quote}"
              </p>
              
              <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-[#5d5143] font-medium">
                <span className="font-semibold text-charcoal">{testimonials[index].author}</span>
                <div className="h-1 w-1 rounded-full bg-[#b99c71]" />
                <span className="text-[#7a6a5f]">{testimonials[index].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Navigation Dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-6 bg-charcoal' : 'w-1.5 bg-[#cebdad]'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};