import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TouristCardProps {
  title: string;
  description: string;
  images: string[];
  address?: {
    text: string;
    link?: string;
  };
  animationDelay?: string;
}

const TouristCard: React.FC<TouristCardProps> = ({
  title,
  description,
  images,
  address,
  animationDelay,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showNavigation = images.length > 1;

  return (
    <div
      ref={cardRef}
      className={cn(
        "bg-white rounded-2xl overflow-hidden shadow-pb-soft transition-all duration-300 ease-in-out border border-pb-muted",
        "hover:translate-y-[-8px] hover:shadow-pb-nature",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
      )}
      style={{ animationDelay: animationDelay }}
    >
      <div className="relative w-full h-[250px] overflow-hidden bg-pb-muted">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} - Vista ${index + 1}`}
            className={cn(
              "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-400 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          />
        ))}
        {showNavigation && (
          <>
            <button
              onClick={handlePrev}
              className="card-nav prev absolute top-1/2 -translate-y-1/2 left-3 z-20 bg-black/50 text-white rounded-full w-9 h-9 text-xl cursor-pointer opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
              aria-label="Foto anterior"
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              className="card-nav next absolute top-1/2 -translate-y-1/2 right-3 z-20 bg-black/50 text-white rounded-full w-9 h-9 text-xl cursor-pointer opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
              aria-label="Próxima foto"
            >
              &#10095;
            </button>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-pb-primary">{title}</h3>
        <p className="text-pb-foreground/80 mb-4 leading-relaxed">{description}</p>
        {address && (
          <p className="text-sm text-pb-foreground/60 italic flex items-start gap-2">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            {address.link ? (
              <a
                href={address.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline border-b border-dotted border-pb-foreground/60 transition-all duration-300 ease-in-out hover:text-pb-accent hover:border-pb-accent"
              >
                {address.text}
              </a>
            ) : (
              <span>{address.text}</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default TouristCard;