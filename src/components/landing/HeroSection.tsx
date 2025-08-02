import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  let lastKnownScrollPosition = 0;
  let ticking = false;

  useEffect(() => {
    const doParallax = (scrollPos: number) => {
      if (heroRef.current) {
        const rate = scrollPos * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    const handleScroll = () => {
      lastKnownScrollPosition = window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          doParallax(lastKnownScrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={cn(
        "min-h-[40vh] bg-cover bg-center text-white flex items-center text-center relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-[var(--gradient-forest)] before:z-0",
        "hero-pattern" // Custom pattern from globals.css
      )}
      style={{ backgroundImage: `url('/assets/images/Pimenta-Bueno-Ro.jpg')` }}
    >
      <div className="container relative z-20">
        <div className="hero-content">
          <h1 className="text-clamp-2.5rem-4rem font-extrabold mb-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            Turismo em Pimenta Bueno
          </h1>
          <p className="text-clamp-1.1rem-1.3rem mb-8 opacity-90 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '1s' }}>
            Descubra as maravilhas naturais da Amazônia em Rondônia. Explore parques ecológicos, praias fluviais, pesca esportiva e a rica história da região.
          </p>
          <Button
            asChild
            className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ease-in-out cursor-pointer border-none
                       bg-white text-pb-primary shadow-pb-soft hover:translate-y-[-2px] hover:shadow-pb-nature
                       focus-visible:outline focus-visible:outline-3 focus-visible:outline-pb-accent focus-visible:outline-offset-2"
          >
            <a href="#pontos-turisticos">Explore Agora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;