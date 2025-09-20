import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

const TestimonialsSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Vi os depoimentos no site e gostaria de agendar minha consulta também!'
    );
    window.open(`https://wa.me/5541997312878?text=${message}`, '_blank');
  };

  const testimonials = [
    {
      name: "Maria Santos",
      age: "45 anos",
      treatment: "Unha Encravada",
      text: "Sofria há anos com unha encravada. Amanda resolveu meu problema em uma única sessão, sem dor! Atendimento excepcional e muito profissional. Recomendo de olhos fechados!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "João Silva",
      age: "62 anos",
      treatment: "Pé Diabético",
      text: "Como diabético, sempre tive muito cuidado com os pés. A Amanda me ensinou técnicas de cuidado que mudaram minha qualidade de vida. Profissional dedicada e muito competente.",
      rating: 5,
      avatar: "👨‍🦳"
    },
    {
      name: "Ana Oliveira",
      age: "28 anos",
      treatment: "Calos e Ressecamento",
      text: "Trabalho muito em pé e meus pés estavam sofrendo. O tratamento foi incrível! Saí da clínica com os pés macios e sem dor. O ambiente é super acolhedor e limpo.",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      name: "Pedro Costa",
      age: "35 anos",
      treatment: "Verrugas Plantares",
      text: "As verrugas nos meus pés me incomodavam há meses. O tratamento a laser da Amanda foi rápido e eficaz. Em poucas sessões, o problema estava resolvido completamente!",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Lucia Fernandes",
      age: "58 anos",
      treatment: "Micose das Unhas",
      text: "Tentei vários tratamentos para micose e nada funcionava. A Amanda usou laser e produtos específicos. Resultado surpreendente! Minhas unhas estão lindas e saudáveis novamente.",
      rating: 5,
      avatar: "👩‍🏫"
    },
    {
      name: "Carlos Rodrigues",
      age: "40 anos",
      treatment: "Fascite Plantar",
      text: "A dor no calcanhar estava me impedindo de correr. O tratamento da Amanda, junto com as palmilhas personalizadas, me devolveu a qualidade de vida. Voltei a correr sem dor!",
      rating: 5,
      avatar: "🏃‍♂️"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-light/50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Depoimentos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-pink">O Que Nossos Pacientes</span>
            <br />
            <span className="text-foreground">Falam Sobre Nós</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior recompensa. 
            Veja como transformamos vidas através do cuidado especializado.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-card hover:shadow-hover transition-all duration-300 group">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.age}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.treatment}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white border-0 shadow-card text-center p-6">
            <CardContent className="p-0 space-y-4">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-lg font-semibold text-foreground">Taxa de Satisfação</div>
              <p className="text-sm text-muted-foreground">
                Baseado em mais de 500 avaliações de pacientes
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-card text-center p-6">
            <CardContent className="p-0 space-y-4">
              <div className="text-4xl font-bold text-primary">5000+</div>
              <div className="text-lg font-semibold text-foreground">Pacientes Atendidos</div>
              <p className="text-sm text-muted-foreground">
                Mais de mil vidas transformadas através do cuidado especializado
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-card text-center p-6">
            <CardContent className="p-0 space-y-4">
              <div className="text-4xl font-bold text-primary">5</div>
              <div className="text-lg font-semibold text-foreground">Estrelas Médias</div>
              <p className="text-sm text-muted-foreground">
                Avaliação máxima em todas as plataformas digitais
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-white border-0 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-4xl">⭐</div>
                <h3 className="text-2xl font-bold text-foreground">
                  Seja o Próximo a Transformar Sua Vida!
                </h3>
                <p className="text-muted-foreground">
                  Junte-se aos mais de 5000 pacientes que já experimentaram 
                  a diferença do nosso atendimento especializado. 
                  Agende sua consulta hoje mesmo!
                </p>
                <Button 
                  size="lg"
                  onClick={handleWhatsApp}
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-semibold shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
                >
                  Quero Ser o Próximo!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  ⚡ Resposta em até 5 minutos • 📅 Agendamento rápido • 💬 Tire suas dúvidas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;