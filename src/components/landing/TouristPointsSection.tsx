import React from 'react';
import TouristCard from './TouristCard.tsx';

const TouristPointsSection: React.FC = () => {
  const touristPointsData = [
    {
      title: "Parque Ecológico",
      description: "Mantido pela administração municipal, oferece uma excelente oportunidade de contato com a natureza. O parque preserva sua vegetação original em uma área de 6 km². Possui 8 km de trilhas que devem ser percorridas com guias locais, permitindo admirar diferentes tipos de árvores.",
      images: ["/assets/images/parqueecologico1.jpeg", "/assets/images/parqueecologico2.jpeg"],
      address: {
        text: "Rodovia RO 010, Km 34 - Coordenadas Geográficas: 1143372; 06129265",
        link: "https://www.google.com.br/maps/search/parque+natural+municipal+de+pimenta+bueno/@-11.7272085,-61.4920532,1023m/data=!3m1!1e3?entry=ttu"
      }
    },
    {
      title: "Praia Fluvial",
      description: "Durante o período de estiagem, rios amazônicos revelam praias arenosas ideais para lazer. Na junção dos rios Pimenta Bueno e Comemoração surgem praias populares entre moradores e visitantes pela qualidade das águas e fácil acesso. Algumas praias mais afastadas necessitam de embarcação para acesso.",
      images: ["/assets/images/fotos/praia-fluvial.jpg"],
    },
    {
      title: "Pesca Esportiva",
      description: "A pesca amadora é popular nos rios Machado, Pimenta Bueno, Comemoração e Roosevelt. Durante a estiagem, os turistas apreciam a diversidade de peixes e a tranquilidade da floresta tropical.",
      images: ["/assets/images/pesca.jpg"],
    },
    {
      title: "Fazenda Seringal do Ouro",
      description: "Remanescente da era do extrativismo da borracha, o seringal preserva infraestrutura para produção de látex. Os visitantes podem observar o processo desde a coleta até o beneficiamento, com destaque para o método tradicional de defumação. Localiza-se a 5 km da BR-364 e 21 km da Vila Guaporé.",
      images: ["/assets/images/fotos/fazenda-seringal.jpg"],
      // Address moved to description as per user's text, keeping link if available
    },
    {
      title: "Fonte de Água Mineral Lindágua",
      description: "Local conhecido pelo envase e gaseificação de água mineral. Uma opção interessante para quem deseja conhecer o processo de produção de águas minerais da região.",
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