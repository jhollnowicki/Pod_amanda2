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
import SensitiveImage from "./SensitiveImage";




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
          images: ["/service/unha-encravada-antes.webp", "/service/unha-encravada-depois.webp"],
          name: "Unhas Encravadas",
          description: "Tratamento especializado para alívio imediato da dor",
          features: ["Técnica indolor", "Resultado imediato", "Prevenção de recidiva"],
          sensitive: true,

        },
        {
          name: "Podopediatria",
          description: "Manutenção profissional para unhas saudáveis",
          features: ["Atendimento especializado em pés infantis", "Técnicas delicadas e seguras", "Prevenção de deformidades nas unhas"],
          images: ["/service/correçao-de-unha-encravada.webp", "/service/correça-unha-durante.webp"]
        },
        {
          name: "Correção de Curvatura com Órtese",
          description: "Tratamento especializado que corrige a curvatura da unha, proporcionando alinhamento saudável e duradouro.",
          features: ["Técnica indolor e segura", "Técnica indolor e segura", "Técnica indolor e segura"],
          images: ["/service/curvatura-unha-antes.webp", "/service/curvatura-unha-depois.webp"]
        },
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
          features: ["Tecnologia avançada", "Procedimento rápido", "Mínimo desconforto"],
          images: ["/service/verruga-antes.webp", "/service/verruga-depois.webp"],
        },
        {
          name: "Tratamento de Fungos a Laser",
          description: "Combate eficaz contra fungos nas unhas",
          features: ["Laser especializado", "Tratamento seguro", "Resultados duradouros"],
          images: ["/service/Fungos-antes.webp", "/service/fungos-depois.webp"]
        },
        {
          name: "Terapia com LED",
          description: "Aceleração da cicatrização e regeneração",
          features: ["Cicatrização rápida", "Anti-inflamatório", "Regeneração celular"],
          images: ["/service/led-terapia.webp"]
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
          features: ["Técnica especializada", "Alívio imediato", "Orientação preventiva"],
          images: ["/service/calos-antes.webp", "/service/calos-durante.webp"],
        },
        {
          name: "Peeling Podal",
          description: "Tratamento que remove a pele ressecada e áspera, deixando os pés mais macios, hidratados e renovados.",
          features: ["Elimina células mortas e asperezas", "Hidratação profunda e duradoura", "Sensação imediata de conforto"],
          images: ["/service/rachadura-antes.webp", "/service/rachadura-depois.webp"],
        },
        {
          name: "Olho de Peixe",
          description: "Remoção segura de helomas",
          features: ["Procedimento indolor", "Técnica precisa", "Resultado definitivo"],
          images: ["/service/olho-antes.webp", "/service/olho-depois.webp"],
        },
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
          features: ["Exame completo", "Protocolo específico", "Prevenção de complicações"],
          images: ["/service/prevencao.webp"]
        },
        {
          name: "Úlceras Diabéticas",
          description: "Tratamento especializado de feridas",
          features: ["Curativos especiais", "Acompanhamento frequente", "Protocolo médico"],
          images: ["/service/pes-diabeticos-antes.webp", "/service/pes-diabeticos-depois.webp"],
          sensitive: true,
        },
        {
          name: "Orientação Preventiva",
          description: "Educação para cuidados diários",
          features: ["Instruções personalizadas", "Material educativo", "Acompanhamento contínuo"],
          images: ["/service/orientacao.webp"]
        },

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
                      {/* TOPO COM IMAGEM QUADRADA */}
                      {service.images ? (
                        service.sensitive ? (
                          <SensitiveBeforeAfter
                            images={service.images}
                            alt={service.name}
                          />
                        ) : (
                          <BeforeAfterSlider images={service.images} />
                        )
                      ) : (
                        <ServiceThumb image={(service as any).image} Icon={IconComponent} />
                      )}


                      {/* TÍTULO + DESCRIÇÃO */}
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      {/* CONTEÚDO (features ou botão) */}
                      <CardContent className="space-y-4">
                        {service.features && (
                          <>
                            <div className="space-y-2">
                              {service.features.map((feature: string, featureIndex: number) => (
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
              className="
    w-full sm:w-auto
    bg-primary hover:bg-primary-hover text-white
    px-4 py-4 font-semibold shadow-card hover:shadow-hover
    md:hover:scale-105
    !whitespace-normal break-words text-center leading-snug
    rounded-xl inline-flex items-center justify-center gap-2 mx-auto
  "
            >
              <span className="min-w-0">Agendar Avaliação Personalizada</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
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

  // só roda o intervalo se tiver mais de 1 imagem
  useEffect(() => {
    if (images.length > 1) {
      const t = setInterval(() => setI(p => (p + 1) % images.length), 4000);
      return () => clearInterval(t);
    }
  }, [images.length]);

  return (
    <div className="space-y-2">
      {/* só mostra badge se houver pelo menos 2 imagens */}
      {images.length > 1 && (
        <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[#D6A7AF] text-white">
          {labels[i]}
        </span>
      )}

      {/* container da imagem */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#EAD1D6]/60">
        <img
          src={images[i]}
          alt={labels[i] || "Imagem"}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};


const ServiceThumb = ({ image, Icon }: { image?: string; Icon: any }) => {
  return (
    <div className="relative w-full aspect-square overflow-hidden">
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
          <Icon className="w-10 h-10 text-muted-foreground" />
        </div>
      )}
    </div>
  );
};
const SensitiveBeforeAfter = ({
  images,
  alt,
}: {
  images: string[];
  alt?: string;
}) => {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#EAD1D6]/60">
        {/* prévia borrada (usa a primeira imagem só para “contexto”) */}
        <img
          src={images[0]}
          alt={alt || "Conteúdo sensível"}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-105"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/55 backdrop-blur-[2px]">
          <div className="mx-4 max-w-sm text-center text-white">
            <p className="text-sm font-semibold">Conteúdo sensível</p>
            <p className="text-xs opacity-90 mb-3">
              Imagem clínica (procedimento podológico).
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // não abrir o WhatsApp do card
                setRevealed(true);
              }}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold bg-white text-black hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Mostrar conteúdo sensível"
            >
              Mostrar
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // após consentir, renderiza o slider normal
  return <BeforeAfterSlider images={images} />;
};





export default ServicesSection;