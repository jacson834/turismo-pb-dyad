import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
  title: string;
  imageUrl: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ title, imageUrl }) => {
  const handleClick = () => {
    alert(`Visualizando: ${title}\n\nEm uma implementação completa, aqui seria aberta uma galeria de imagens.`);
  };

  return (
    <div
      className={cn(
        "relative aspect-video rounded-xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer",
        "bg-cover bg-center group"
      )}
      style={{ backgroundImage: `url('${imageUrl}')` }}
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
    >
      <div className="absolute inset-0 bg-black/40 transition-all duration-300 ease-in-out group-hover:bg-black/60 z-10"></div>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg text-center z-20">
        {title}
      </span>
    </div>
  );
};

const GallerySection: React.FC = () => {
  const allGalleryItems = [
    {
      title: "Natureza Amazônica",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
    },
    {
      title: "Rio Pimenta Bueno",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "Floresta Tropical",
      imageUrl: "https://images.unsplash.com/photo-1476231682824-37e0bc46abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Cachoeiras",
      imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80"
    },
    {
      title: "Vida Selvagem",
      imageUrl: "https://images.unsplash.com/photo-1533415648777-407b626eb0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "Pôr do Sol Amazônico",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const initialItemsToShow = 6;
  const [visibleItems, setVisibleItems] = useState(initialItemsToShow);

  const handleLoadMore = () => {
    setVisibleItems(allGalleryItems.length);
  };

  return (
    <section className="py-20 bg-pb-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-clamp-2rem-3rem font-bold mb-4 text-pb-foreground">
            Galeria de Fotos
          </h2>
          <p className="text-lg text-pb-foreground/70 max-w-xl mx-auto">
            Contemple as belezas naturais que aguardam sua visita
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {allGalleryItems.slice(0, visibleItems).map((item, index) => (
            <GalleryItem key={index} title={item.title} imageUrl={item.imageUrl} />
          ))}
        </div>

        {visibleItems < allGalleryItems.length && (
          <div className="text-center mt-10">
            <Button
              onClick={handleLoadMore}
              className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ease-in-out cursor-pointer border-none
                         bg-white text-pb-primary shadow-pb-soft hover:translate-y-[-2px] hover:shadow-pb-nature
                         focus-visible:outline focus-visible:outline-3 focus-visible:outline-pb-accent focus-visible:outline-offset-2"
            >
              Veja Mais
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;