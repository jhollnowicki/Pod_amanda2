import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Award, 
  Users, 
  Clock, 
  Heart,
  ArrowRight,
  Star,
  BookOpen,
  Shield
} from 'lucide-react';
import amandaPortrait from '@/assets/amanda-portrait.jpg';

const AboutSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá Amanda! Gostaria de conversar com você sobre meus cuidados podológicos.'
    );
    window.open(`https://wa.me/5541997312878?text=${message}`, '_blank');
  };

  const achievements = [
    {
      icon: Award,
      title: "Formação Especializada",
      description: "Graduada em Podologia com especializações em tratamentos avançados"
    },
    {
      icon: Users,
      title: "5000+ Pacientes",
      description: "Mais de mil vidas transformadas através do cuidado especializado"
    },
    {
      icon: Clock,
      title: "15+ Anos de Experiência",
      description: "Experiência sólida no cuidado e tratamento de diversas condições"
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Cada paciente é tratado com carinho, atenção e respeito"
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Excelência",
      description: "Buscamos sempre a melhor qualidade em todos os nossos serviços"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Protocolos rigorosos de higiene e esterilização em todos os procedimentos"
    },
    {
      icon: BookOpen,
      title: "Atualização",
      description: "Sempre em busca das mais novas técnicas e tecnologias disponíveis"
    },
    {
      icon: Heart,
      title: "Empatia",
      description: "Entendemos suas necessidades e tratamos cada caso com cuidado especial"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-light/50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Sobre a Profissional
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-pink">Conheça Amanda Matos</span>
            <br />
            <span className="text-foreground">Especialista em Podologia</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image and Quick Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-card">
                <img 
                  src={amandaPortrait} 
                  alt="Amanda Matos - Podóloga Especialista"
                  className="w-full h-96 object-cover"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Achievement Card */}
              <Card className="absolute -bottom-6 -right-6 bg-white shadow-hover border-0 p-4">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="bg-gradient-soft border-0 p-4">
                    <CardContent className="p-0 text-center space-y-2">
                      <IconComponent className="w-8 h-8 text-primary mx-auto" />
                      <div className="font-semibold text-foreground text-sm">{achievement.title}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Uma Paixão Pelos Cuidados dos Pés
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Há mais de 15 anos, dedico minha carreira ao cuidado especializado dos pés, 
                  ajudando pessoas a recuperarem sua qualidade de vida e bem-estar. 
                  Minha jornada na podologia começou com uma simples missão: 
                  <strong className="text-primary"> proporcionar alívio e conforto através de cuidados especializados</strong>.
                </p>
                
                <p>
                  Cada paciente que atendo tem uma história única, e é essa individualidade 
                  que me motiva a buscar sempre as melhores soluções. Acredito que os cuidados 
                  com os pés vão muito além do tratamento – eles são fundamentais para nossa 
                  mobilidade, confiança e qualidade de vida.
                </p>
                
                <p>
                  <strong className="text-primary">Minha missão</strong> é simples: oferecer tratamentos de excelência 
                  com o carinho e atenção que cada pessoa merece. Aqui, você não é apenas 
                  um paciente, você é parte da nossa família.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <Button 
                size="lg"
                onClick={handleWhatsApp}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-semibold shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
              >
                Conversar com Dra. Amanda Matos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Resposta rápida • Atendimento personalizado • Orientação profissional
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-soft rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Nossos Valores e Compromissos
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estes são os princípios que guiam cada atendimento e garantem 
              que você receba sempre o melhor cuidado possível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-card hover:shadow-hover transition-all duration-300 text-center p-6">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="mt-16 text-center">
          <Card className="bg-white border-primary/20 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Credenciais Profissionais
                </h3>
                <div className="text-muted-foreground space-y-2">
                  <p>• Pos Graduada em Análises Clínicas e Microbiologia - Faveni</p>
                  <p>• Graduada em Podologia Clinica - Universidade UniCesumar</p>
                  <p>• Bacharel em Biomedicina - Universidade UniCesumar</p>
                  <p>• Especialização em Farmacos na Podologia</p>
                  <p>• Especialização em Pacientes Diabeticos</p>
                  <p>• Especialização em Suplementação</p>
                  <p>• Especialização em Podopediatria</p>
                  <p>• Especialização em Manipulação</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;