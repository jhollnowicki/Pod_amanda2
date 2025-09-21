import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  MessageCircle,
  Instagram,
  Clock,
  Heart,
  Mail,
  ExternalLink
} from 'lucide-react';
import logo from '@/assets/logo-nova.png';

const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de mais informações sobre os serviços da Amanda Matos Podologia.'
    );
    window.open(`https://wa.me/5541997312878?text=${message}`, '_blank');
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Produtos', href: '#products' },
    { name: 'Quem Tratamos', href: '#patients' },
    { name: 'Sobre Amanda', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ];

  const services = [
    'Unhas Encravadas',
    'Laser para Verrugas',
    'Pé Diabético',
    'Calos e Calosidades',
    'Micose das Unhas',
    'Produtos Manipulados'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-brand-gray-light to-white border-t border-brand-gray">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={logo} 
                  alt="Amanda Matos Podologia e Saúde" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Especialista em podologia com mais de 15 anos de experiência, 
                dedicada ao cuidado integral da saúde dos seus pés com tecnologia 
                de ponta e atendimento humanizado.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="sm"
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.instagram.com/espaco.saudeebem_estar/', '_blank')}
                  className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Links Rápidos</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Principais Serviços</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="text-muted-foreground">
                    {service}
                  </div>
                ))}
              </div>
              <Button 
                variant="outline"
                size="sm"
                onClick={() => scrollToSection('#services')}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Ver Todos os Serviços
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p>Rua Rio Eufrates, n°81 - sala 104 - Iguaçu</p>
                    <p>Edifício Belaver 1° Andar</p>
                    <p>Fazenda Rio Grande - PR</p>
                    <p>CEP: 83833-088</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+5541997312878"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    (41) 3797-7333
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <button
                    onClick={handleWhatsApp}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    WhatsApp: (41) 99731-2878
                  </button>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p>Seg-Sex: 08:00 - 11:00|13:00 - 18:00</p>
                    <p>Sábado: 08:00 - 13:00</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-t border-brand-gray">
          <div className="bg-primary-light/20 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Pronto para Cuidar dos Seus Pés?
            </h3>
            <p className="text-muted-foreground mb-4">
              Agende sua consulta hoje mesmo e dê o primeiro passo para o bem-estar!
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-semibold shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Consulta Agora
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-brand-gray">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Amanda Matos - Podologia e Saúde. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>para cuidar dos seus pés</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-brand-gray">
            <div className="text-xs text-muted-foreground text-center space-y-2">
              <p>
                CNPJ: 36.550.445/0001-92 | Registro Profissional: CBO 3221-10
              </p>
              <p>
                Este site respeita sua privacidade. Não compartilhamos seus dados pessoais. 
                Para emergências médicas, procure o hospital mais próximo.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 text-xs">
                <span>Política de Privacidade</span>
                <span>•</span>
                <span>Termos de Uso</span>
                <span>•</span>
                <span>Aviso Legal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;