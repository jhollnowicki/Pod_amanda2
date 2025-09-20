import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ShoppingCart,
  Star,
  Truck,
  Shield,
  Heart,
  ArrowRight,
  Package,
  Sparkles,
  MessageCircle
} from 'lucide-react';


const ProductsSection = () => {
  const handleWhatsApp = (product: string, price?: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto: ${product}${price ? ` - ${price}` : ''}. Gostaria de mais informações.`
    );
    window.open(`https://wa.me/5541997312878?text=${message}`, '_blank');
  };

  const readyProducts = [
    {
      name: "Esfoliante Suave",
      description: "Esfoliante para mãos, pés e cotovelos que remove impurezas e suaviza calosidades e asperezas.",
      price: "R$ 39,90",
      originalPrice: "R$ 57,90",
      image: "/product/esfoliante.png",
      features: ["Creme hidratante.", "Esfoliante suave.", "Lima especializada.", "Suavização de Calosidades."],
      badge: "Mais Vendido",
      badgeColor: "bg-green-500"
    },
    {
      name: "Base Para Unhas",
      description: "Ajuda a proteger e fortalecer as unhas, prevenindo microorganismos causadores de micoses.",
      price: "R$ 39,90",
      originalPrice: "R$ 59,90",
      image: "/product/base-para-unha.png",
      features: ["Ação antifúngica.", "Fortalecedora.", "Unhas mais Saudaveis.", "Dermatologicamente Testado."],
      badge: "Recomendado",
      badgeColor: "bg-blue-500"
    },
    {
      name: "Oleo Para Unhas",
      description: "AJuda a previnir microorganismos causadores de micoses na unha.",
      price: "R$ 39,90",
      originalPrice: "R$ 56,90",
      image: "/product/oleo-para-unha.png",
      features: ["Ação Antifúngica.", "Hidratação Profunda.", "Prevenção de Micoses.", "Dermatologicamente Testado."],
      badge: "Novidade",
      badgeColor: "bg-purple-500"
    },
    {
      name: "Spray Para Unhas",
      description: "AJuda a previnir microorganismos causadores de micoses na unha.",
      price: "R$ 39,90",
      originalPrice: "R$ 49,90",
      image: "/product/sapray-para-unhas.png",
      features: ["Proteção Prolongada.", "Ação Antifúngica.", "Previne Micoses.", "Rápida Absorção."],
      badge: "Promoção",
      badgeColor: "bg-red-500"
    },
    {
      name: "Spray Hidra",
      description: "Elimina microorganismos que causam mau odor, hidrata e alivia a transpiração excessiva.",
      price: "R$ 39,90",
      originalPrice: "R$ 49,90",
      image: "/product/Sprey-para-axicilas-e-pes.png",
      features: ["Ação noturna.", "Fórmula concentrada.", "Absorção Rápida.", "Fragrância Suave."],
      badge: "Oferta",
      badgeColor: "bg-orange-500"
    },
    {
      name: "Óleo de Girassol Ozonizado ",
      description: "Auxilia na cicatrização, hidrata e regenera a pele, além de ter ação antibacteriana e antifúngica.",
      price: "R$ 79,90",
      originalPrice: "R$ 99,90",
      image: "/product/ozon.png",
      features: ["Efeito Cicatrizante.", "Ação Antibacteriana e Antifúngica.", "Propriedades Anti-inflamatórias.", "Hidratação e Regeneração da Pele."],
      badge: "Especializado",
      badgeColor: "bg-primary"
    }
  ];

  const customProducts = [
    {
      name: "Cremes Personalizados",
      description: "Fórmulas desenvolvidas especialmente para suas necessidades",
      features: ["Análise individual", "Ingredientes selecionados", "Concentração personalizada", "Acompanhamento profissional"],
      icon: "🧪"
    },
    {
      name: "Palmilhas Sob Medida",
      description: "Moldadas especificamente para a anatomia dos seus pés",
      features: ["Moldagem 3D", "Materiais premium", "Correção postural", "Garantia estendida"],
      icon: "📐"
    },
    {
      name: "Tratamentos Específicos",
      description: "Manipulados exclusivos para condições particulares",
      features: ["Receituário médico", "Dosagem precisa", "Princípios ativos concentrados", "Monitoramento contínuo"],
      icon: "💊"
    }
  ];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-light/50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4 mr-2" />
            Nossos Produtos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-pink">Produtos de Qualidade</span>
            <br />
            <span className="text-foreground">para Cuidados Completos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selecionamos os melhores produtos para complementar seus tratamentos.
            Qualidade garantida e resultados comprovados.
          </p>
        </div>

        {/* Ready Products */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground flex items-center">
              <ShoppingCart className="w-8 h-8 text-primary mr-3" />
              Produtos à Pronta Entrega
            </h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Truck className="w-4 h-4" />
              <span>Entrega rápida</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readyProducts.map((product, index) => (
              <Card key={index} className="card-hover bg-white border-0 overflow-hidden group">
                <CardHeader className="relative pb-4">
                  {product.badge && (
                    <Badge className={`absolute top-4 right-4 ${product.badgeColor} text-white px-2 py-1 text-xs`}>
                      {product.badge}
                    </Badge>
                  )}

                  {/* Aqui trocamos o texto pela imagem */}
                  <div className="mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-contain rounded-md shadow-sm transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 transform group-hover:scale-105"
                    onClick={() => handleWhatsApp(product.name, product.price)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>


          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-green-500 mr-2" />
              <span>Produtos Originais</span>
            </div>

            <div className="flex items-center">
              <Heart className="w-4 h-4 text-red-500 mr-2" />
              <span>Satisfação Garantida</span>
            </div>
          </div>
        </div>

        {/* Custom Products */}
        <div className="bg-gradient-soft rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary mr-3" />
              Produtos Manipulados
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvemos produtos exclusivos baseados nas suas necessidades específicas.
              Cada formulação é única e personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customProducts.map((product, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => handleWhatsApp(product.name)}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              onClick={() => handleWhatsApp("Consulta para produtos manipulados")}
              className="
                  w-full sm:w-auto
                  bg-primary hover:bg-primary-hover text-white
                  px-4 py-4 font-semibold shadow-card hover:shadow-hover
                  md:hover:scale-105
                  !whitespace-normal leading-snug text-center
                  rounded-xl flex items-center justify-center gap-2
                "
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <span className="min-w-0">Agendar Consulta para Manipulados</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;