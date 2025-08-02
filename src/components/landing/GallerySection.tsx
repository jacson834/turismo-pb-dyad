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
  const allGalleryItems = Array.from({ length: 46 }, (_, i) => ({
    title: `Foto ${i + 1}`,
    imageUrl: `/assets/images/fotos/NOME-DA-FOTO-${String(i + 1).padStart(2, '0')}.jpg`, // Adjust image naming convention if needed
  }));

  const initialItemsToShow = 6;
  const [visibleItems, setVisibleItems] = useState(initialItemsToShow);

  const handleLoadMore = () => {
    setVisibleItems(allGalleryItems.length); // Show all items
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