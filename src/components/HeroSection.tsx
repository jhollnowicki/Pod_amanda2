import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Star, Users, Award, Clock } from 'lucide-react';
import heroClinic from '@/assets/hero-clinic.jpg';
import feetCare from '@/assets/feet-care.jpg';

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de agendar uma consulta no Espaço Podologia Amanda Matos.'
    );
    window.open(`https://wa.me/5541997312878?text=${message}`, '_blank');
  };

  const handleSchedule = () => {
    const contactSection = document.querySelector('#booking');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-hero">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-primary-light/50 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Clínica Especializada em Podologia
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-pink">Cuidando da sua saúde</span>
                <br />
                <span className="text-foreground">através dos pés</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Tratamentos especializados e personalizados para o cuidado completo dos seus pés. 
                Tecnologia avançada com o carinho humano que você merece.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleSchedule}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg font-semibold shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Agende sua Consulta
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleWhatsApp}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Fale no WhatsApp
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>Avaliação 5 estrelas</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-primary mr-1" />
                <span>Clínica de referência</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-primary mr-1" />
                <span>Atendimento rápido</span>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-card">
                  <img 
                    src={heroClinic} 
                    alt="Clínica Amanda Matos - Ambiente moderno e acolhedor"
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-card">
                  <div className="text-2xl font-bold text-primary mb-2">Ambiente Acolhedor</div>
                  <p className="text-sm text-muted-foreground">
                    Espaço moderno e confortável para seu bem-estar
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-card">
                  <div className="text-2xl font-bold text-primary mb-2">Cuidado Especializado</div>
                  <p className="text-sm text-muted-foreground">
                    Tratamentos personalizados para suas necessidades
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-card">
                  <img 
                    src={feetCare} 
                    alt="Cuidados especializados para os pés"
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-pink-light/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;