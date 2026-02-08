
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Drake Brayden",
    role: "Designer",
    content: "This design set has it all. It's been the perfect accompaniment to our productivity app brand. We couldn't be happier with the results.",
    avatar: "https://i.pravatar.cc/150?u=drake"
  },
  {
    name: "Sarah Jenkins",
    role: "CEO",
    company: "Lumina SASS",
    content: "Projexion completely transformed our conversion rate. We saw a 40% jump in signups within two weeks of launching the new site.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Founder",
    company: "Drift Commerce",
    content: "The attention to detail is insane. It's rare to find an agency that understands both aesthetics and business psychology so deeply.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slower interval for better readability

    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 px-4 relative">
      {/* Light background tint to maintain the "Soft UI" feel from the image while blending */}
      <div className="absolute inset-0 bg-background/30 -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl flex items-center justify-center min-h-[400px]">

          {/* Left Navigation Button */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-[-80px] w-12 h-12 items-center justify-center rounded-xl bg-white border border-white/20 shadow-lg hover:bg-gray-50 transition-all text-primary z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Main Testimonial Card */}
          <div className="relative w-full flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full glass rounded-[2rem] p-10 md:p-16 text-center absolute"
              >
                <div className="absolute inset-0 border border-white/40 rounded-[2rem] pointer-events-none" />

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cta text-cta" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-2xl md:text-3xl font-medium text-text mb-12 leading-relaxed max-w-2xl mx-auto">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* User Info */}
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                  />
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-text">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm font-semibold text-secondary tracking-wide uppercase">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Partial Right Card (Static visual cue, maybe remove or animate? Keeping static simplified for 'fade' request) */}
          {/* Removing the 'Partial Right Card' as it conflicts with a fade transition logic visually */}

          {/* Right Navigation Button */}
          <button
            onClick={next}
            className="hidden md:flex absolute right-[-80px] w-12 h-12 items-center justify-center rounded-xl bg-white border border-white/20 shadow-lg hover:bg-gray-50 transition-all text-primary z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-4 mt-8 md:hidden z-10">
          <button onClick={prev} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md text-gray-400">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md text-gray-400">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-2 mt-12 z-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-primary w-4' : 'bg-primary/20'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
