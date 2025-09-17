import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Baby, 
  Users, 
  Briefcase, 
  Heart, 
  Activity,
  ArrowRight,
  Star,
  Shield,
  Timer,
  Target
} from 'lucide-react';

const PatientsSection = () => {
  const handleWhatsApp = (audience: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre os tratamentos para: ${audience}`
    );
    window.open(`https://wa.me/5541999999999?text=${message}`, '_blank');
  };

  const patientTypes = [
    {
      title: "Crianças",
      icon: Baby,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Cuidados especiais e delicados para os pequenos",
      details: [
        "Ambiente lúdico e acolhedor",
        "Técnicas adaptadas para crianças",
        "Prevenção desde cedo",
        "Orientação para os pais"
      ],
      specialties: [
        "Unhas encravadas infantis",
        "Verrugas plantares",
        "Cuidados preventivos",
        "Educação em saúde dos pés"
      ],
      image: "👶"
    },
    {
      title: "Atletas",
      icon: Activity,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: "Performance e prevenção para esportistas",
      details: [
        "Prevenção de lesões",
        "Melhora da performance",
        "Recuperação acelerada",
        "Acompanhamento especializado"
      ],
      specialties: [
        "Calos de corrida",
        "Bolhas e atrito",
        "Palmilhas esportivas",
        "Fortalecimento da pisada"
      ],
      image: "🏃‍♀️"
    },
    {
      title: "Trabalhadores",
      icon: Briefcase,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Alívio para quem passa muito tempo em pé",
      details: [
        "Tratamento de calosidades",
        "Alívio da dor e fadiga",
        "Melhora da postura",
        "Produtos para uso diário"
      ],
      specialties: [
        "Fascite plantar",
        "Calos ocupacionais",
        "Fadiga dos pés",
        "Palmilhas ortopédicas"
      ],
      image: "👔"
    },
    {
      title: "55+ (Idosos)",
      icon: Heart,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Cuidado especial para a terceira idade",
      details: [
        "Atendimento humanizado",
        "Cuidados com a mobilidade",
        "Prevenção de quedas",
        "Conforto e bem-estar"
      ],
      specialties: [
        "Unhas espessadas",
        "Ressecamento da pele",
        "Problemas circulatórios",
        "Cuidados preventivos"
      ],
      image: "👴"
    },
    {
      title: "Diabéticos",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      description: "Protocolo especializado para diabéticos",
      details: [
        "Avaliação vascular",
        "Prevenção de complicações",
        "Cuidados especializados",
        "Monitoramento contínuo"
      ],
      specialties: [
        "Úlceras diabéticas",
        "Neuropatia periférica",
        "Cuidados preventivos",
        "Educação em autocuidado"
      ],
      image: "🩺"
    }
  ];

  return (
    <section id="patients" className="section-padding bg-gradient-soft">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-light/50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Quem Tratamos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-pink">Cuidados Especializados</span>
            <br />
            <span className="text-foreground">para Cada Fase da Vida</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada pessoa tem necessidades únicas. Nossos tratamentos são personalizados 
            para atender diferentes faixas etárias e estilos de vida.
          </p>
        </div>

        {/* Patient Types Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {patientTypes.map((patient, index) => {
            const IconComponent = patient.icon;
            return (
              <Card 
                key={index} 
                className="card-hover bg-white border-0 overflow-hidden group cursor-pointer"
                onClick={() => handleWhatsApp(patient.title)}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 ${patient.bgColor} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${patient.color}`} />
                    </div>
                    <div className="text-4xl">{patient.image}</div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {patient.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {patient.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Care Details */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      Nosso Diferencial
                    </h4>
                    <div className="space-y-2">
                      {patient.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Target className="w-4 h-4 text-primary mr-2" />
                      Especialidades
                    </h4>
                    <div className="space-y-2">
                      {patient.specialties.map((specialty, specialtyIndex) => (
                        <div key={specialtyIndex} className="flex items-center space-x-2">
                          <Timer className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 transform group-hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp(patient.title);
                    }}
                  >
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Notice for Diabetics */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-red-50 border-red-200 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-red-900">
                    Atenção Especial para Diabéticos
                  </h3>
                  <p className="text-red-800">
                    Se você é diabético e apresenta feridas nos pés, alterações na sensibilidade, 
                    ou qualquer sintoma preocupante, <strong>não deixe para depois</strong>. 
                    Entre em contato conosco imediatamente para uma avaliação emergencial.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => handleWhatsApp("Emergência - Diabético com sintomas nos pés")}
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Contato de Emergência
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Não se enquadra em nenhuma categoria?
            </h3>
            <p className="text-muted-foreground mb-6">
              Cada pessoa é única e merece um atendimento personalizado. 
              Agende uma consulta e vamos encontrar o melhor tratamento para você.
            </p>
            <Button 
              size="lg"
              onClick={() => handleWhatsApp("Consulta personalizada - Avaliação completa")}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-semibold shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientsSection;