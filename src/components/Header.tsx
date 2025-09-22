import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo-nova.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Produtos', href: '#products' },
    { name: 'Quem Tratamos', href: '#patients' },
    { name: 'Sobre', href: '#about' },
    { name: 'Agendamento', href: '#booking' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-gray-light">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Amanda Matos Podologia e Saúde" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-brand-pink hover:text-brand-pink-dark transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('tel:+5541997312878', '_self')}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar
            </Button>
            <Button
              size="sm"
              onClick={() => window.open('https://wa.me/5541997312878?text=Olá! Gostaria de agendar uma consulta.', '_blank')}
              className="bg-primary hover:bg-primary-hover text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-brand-gray-light bg-white/95 backdrop-blur-sm">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-brand-pink hover:text-brand-pink-dark hover:bg-primary-light/50 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4">
                <Button
                  variant="outline"
                  onClick={() => window.open('tel:+5541997312878', '_self')}
                  className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
                <Button
                  onClick={() => window.open('https://wa.me/5541997312878?text=Olá! Gostaria de agendar uma consulta.', '_blank')}
                  className="bg-primary hover:bg-primary-hover text-white w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;