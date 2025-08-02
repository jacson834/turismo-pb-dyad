import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className={cn(
      "bg-gradient-to-br from-pb-foreground to-pb-foreground/[0.95] text-pb-background/80 py-16 mt-20",
      "border-t-4 border-pb-primary relative"
    )}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
            <img src="/assets/images/brasao.png" alt="Brasão da Prefeitura de Pimenta Bueno" className="max-w-[80px] h-auto flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-pb-background mb-4">Prefeitura de Pimenta Bueno</h3>
              <div className="leading-relaxed">
                <a
                  href="https://www.google.com/maps/place/Prefeitura+de+Pimenta+Bueno/@-11.670817,-61.1883675,80m/data=!3m1!1e3!4m6!3m5!1s0x93b7e5d11ca56f83:0x57d5df651de4f8c3!8m2!3d-11.6708446!4d-61.1884997!16s%2Fg%2F1tdx0mq7?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit no-underline transition-colors duration-300 ease-in-out hover:text-pb-background"
                >
                  Av. Castelo Branco, 1046<br />
                  Pimenta Bueno – RO
                </a>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-pb-background mb-4">Atendimento</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-3">
                <a href="https://wa.me/5569981162254" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline transition-colors duration-300 ease-in-out hover:text-pb-background flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-5 h-5" /> Balcão: (69) 98116-2254
                </a>
              </li>
              <li className="mb-3">
                <a href="https://wa.me/556998169989" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline transition-colors duration-300 ease-in-out hover:text-pb-background flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-5 h-5" /> Ouvidoria: (69) 98169-9989
                </a>
              </li>
              <li>
                <a href="mailto:gabinete@pimentabueno.ro.gov.br" className="text-inherit no-underline transition-colors duration-300 ease-in-out hover:text-pb-background flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-5 h-5" /> gabinete@pimentabueno.ro.gov.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-pb-background/20 pt-8 mt-10 text-center text-sm text-pb-background/60">
          <p>© 2025 Prefeitura Municipal de Pimenta Bueno - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;