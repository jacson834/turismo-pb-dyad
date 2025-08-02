import React from 'react';
import TouristCard from './TouristCard.tsx';

const TouristPointsSection: React.FC = () => {
  const touristPointsData = [
    {
      title: "Parque Ecológico",
      description: "Mantido pela administração municipal, oferece contato com a natureza. Vegetação original em área de 6 km². 8 km de trilhas guiadas para admirar diferentes tipos de árvores.",
      images: ["/assets/images/parqueecologico1.jpeg", "/assets/images/parqueecologico2.jpeg"],
      address: {
        text: "Rodovia RO 010, Km 34 - Coordenadas: 1143372; 06129265",
        link: "https://www.google.com.br/maps/search/parque+natural+municipal+de+pimenta+bueno/@-11.7272085,-61.4920532,1023m/data=!3m1!1e3?entry=ttu"
      }
    },
    {
      title: "Praia",
      description: "Durante a estiagem, rios amazônicos revelam praias arenosas ideais para lazer. Localizadas na junção dos rios Pimenta Bueno e Comemoração, são populares pela qualidade das águas e fácil acesso.",
      images: ["/assets/images/fotos/praia-fluvial.jpg"],
    },
    {
      title: "Pesca (Lagoa)",
      description: "Pesca amadora popular nos rios Machado, Pimenta Bueno, Comemoração e Roosevelt. Turistas aproveitam a diversidade de peixes e a tranquilidade da floresta na estiagem.",
      images: ["/assets/images/pesca.jpg"],
    },
    {
      title: "Fazenda Seringal do Ouro (Açude)",
      description: "Remanescente da era do extrativismo da borracha, preserva infraestrutura para produção de látex. Visitantes conhecem todo o processo tradicional, incluindo defumação.",
      images: ["/assets/images/fotos/fazenda-seringal.jpg"],
      address: {
        text: "5 km da BR-364 e 21 km da Vila Guaporé"
      }
    },
    {
      title: "Água Mineral Lindágua (Fonte de Água Mineral)",
      description: "Local de envase e gaseificação da água mineral. Interessante para quem quer conhecer o processo de produção local.",
      images: ["/assets/images/fotos/fonte-agua.jpg"],
    },
  ];

  return (
    <section id="pontos-turisticos" className="py-20 bg-gradient-to-br from-pb-background to-pb-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-clamp-2rem-3rem font-bold mb-4 text-pb-foreground">
            Pontos Turísticos
          </h2>
          <p className="text-lg text-pb-foreground/70 max-w-xl mx-auto">
            Explore as maravilhas naturais e históricas que fazem de Pimenta Bueno um destino único na Amazônia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {touristPointsData.map((point, index) => (
            <TouristCard
              key={index}
              title={point.title}
              description={point.description}
              images={point.images}
              address={point.address}
              animationDelay={`${0.1 + index * 0.1}s`} // Apply staggered animation delay
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristPointsSection;