import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Scissors,
  Zap,
  Heart,
  Shield,
  Baby,
  Activity,
  ArrowRight,
  Check
} from 'lucide-react';
import { useState, useEffect } from "react";


const ServicesSection = () => {
  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o serviço: ${service}`
    );
    window.open(`https://wa.me/5541997312878?text=${message}`, '_blank');
  };

  const serviceCategories = [
    {
      title: "Tratamentos de Unhas",
      icon: Scissors,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      services: [
        {
          name: "Unhas Encravadas",
          description: "Tratamento especializado para alívio imediato da dor",
          features: ["Técnica indolor", "Resultado imediato", "Prevenção de recidiva"]
        },
        {
          name: "Micose das Unhas",
          description: "Combate eficaz contra fungos nas unhas",
          features: ["Laser especializado", "Tratamento seguro", "Resultados duradouros"]
        },
        {
          name: "Cuidados com Cutículas",
          description: "Manutenção profissional para unhas saudáveis",
          features: ["Técnica profissional", "Produtos esterilizados", "Cuidado especializado"]
        },
        {
          name: "Antes e Depois",
          description: "Resultados reais do tratamento",
          images: ["/service/correçao-de-unha-encravada.jpg", "/service/correça-unha-durante.jpg"]
        }
      ]
    },
    {
      title: "Laser e Terapias Avançadas",
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      services: [
        {
          name: "Laser para Verrugas",
          description: "Remoção precisa e eficaz de verrugas plantares",
          features: ["Tecnologia avançada", "Procedimento rápido", "Mínimo desconforto"]
        },
        {
          name: "Laser para Micoses",
          description: "Tratamento de última geração para fungos",
          features: ["Alta eficácia", "Sem efeitos colaterais", "Resultados visíveis"]
        },
        {
          name: "Terapia com LED",
          description: "Aceleração da cicatrização e regeneração",
          features: ["Cicatrização rápida", "Anti-inflamatório", "Regeneração celular"]
        }
      ]
    },
    {
      title: "Cuidados Especializados",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-50",
      services: [
        {
          name: "Calos e Calosidades",
          description: "Remoção profissional e prevenção",
          features: ["Técnica especializada", "Alívio imediato", "Orientação preventiva"]
        },
        {
          name: "Fissuras nos Pés",
          description: "Tratamento para regeneração da pele",
          features: ["Hidratação profunda", "Cicatrização acelerada", "Prevenção de infecções"]
        },
        {
          name: "Olho de Peixe",
          description: "Remoção segura de helomas",
          features: ["Procedimento indolor", "Técnica precisa", "Resultado definitivo"]
        },
        {
          name: "Antes e Depois",
          description: "Resultados reais do tratamento",
          images: ["/service/calos-antes.jpg", "/service/calos-durante.jpg"]
        }
      ]
    },
    {
      title: "Pés Diabéticos",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      services: [
        {
          name: "Avaliação Preventiva",
          description: "Cuidado especializado para diabéticos",
          features: ["Exame completo", "Protocolo específico", "Prevenção de complicações"]
        },
        {
          name: "Úlceras Diabéticas",
          description: "Tratamento especializado de feridas",
          features: ["Curativos especiais", "Acompanhamento frequente", "Protocolo médico"]
        },
        {
          name: "Orientação Preventiva",
          description: "Educação para cuidados diários",
          features: ["Instruções personalizadas", "Material educativo", "Acompanhamento contínuo"]
        },
        {
          name: "Antes e Depois",
          description: "Resultados reais do tratamento",
          images: ["/service/pes-diabeticos-antes.jpg", "/service/pes-diabeticos-depois.jpg"]
        }

      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-soft">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-light/50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Activity className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-pink">Tratamentos Especializados</span>
            <br />
            <span className="text-foreground">para Todos os Tipos de Pés</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de tratamentos com tecnologia de ponta e cuidado humanizado.
            Cada procedimento é personalizado para suas necessidades específicas.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className="card-hover bg-white border-0 overflow-hidden group cursor-pointer"
                      onClick={() => handleWhatsApp(service.name)}
                    >
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {service.images ? (
                          <BeforeAfterSlider images={service.images} />
                        ) : (
                          <>
                            <div className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-2">
                                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>

                            <Button
                              variant="ghost"
                              className="w-full group-hover:bg-primary-light group-hover:text-primary transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleWhatsApp(service.name);
                              }}
                            >
                              Saiba Mais
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </>
                        )}
                      </CardContent>


                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-muted-foreground mb-6">
              Oferecemos consultas personalizadas para avaliar suas necessidades específicas.
              Agende uma avaliação completa hoje mesmo.
            </p>
            <Button
              size="lg"
              onClick={() => handleWhatsApp("Consulta personalizada")}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-semibold shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
            >
              Agendar Avaliação Personalizada
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
const BeforeAfterSlider = ({ images }: { images: string[] }) => {
  const [i, setI] = useState(0);
  const labels = ["Antes", "Depois"];

    useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="space-y-2">
      {/* badge fora da imagem */}
      <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[#D6A7AF] text-white">
        {labels[i]}
      </span>

      {/* container com recorte arredondado */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#EAD1D6]/60">
        <img
          src={images[i]}
          alt={labels[i]}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};





export default ServicesSection;