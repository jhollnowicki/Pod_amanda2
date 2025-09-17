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
  Sparkles
} from 'lucide-react';

const ProductsSection = () => {
  const handleWhatsApp = (product: string, price?: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto: ${product}${price ? ` - ${price}` : ''}. Gostaria de mais informações.`
    );
    window.open(`https://wa.me/5541999999999?text=${message}`, '_blank');
  };

  const readyProducts = [
    {
      name: "Kit Cuidados Diários",
      description: "Kit completo para manutenção da saúde dos pés",
      price: "R$ 89,90",
      originalPrice: "R$ 120,00",
      image: "🦶",
      features: ["Creme hidratante", "Esfoliante suave", "Lima especializada", "Manual de cuidados"],
      badge: "Mais Vendido",
      badgeColor: "bg-green-500"
    },
    {
      name: "Palmilhas Terapêuticas",
      description: "Palmilhas ergonômicas para alívio e conforto",
      price: "R$ 159,90",
      originalPrice: "R$ 200,00",
      image: "👟",
      features: ["Material antialérgico", "Absorção de impacto", "Diferentes tamanhos", "Garantia de 6 meses"],
      badge: "Recomendado",
      badgeColor: "bg-blue-500"
    },
    {
      name: "Creme Anti-Fúngico Premium",
      description: "Fórmula avançada para prevenção de micoses",
      price: "R$ 45,90",
      originalPrice: "R$ 60,00",
      image: "🧴",
      features: ["Ação antifúngica", "Hidratação profunda", "Uso diário", "Dermatologicamente testado"],
      badge: "Novidade",
      badgeColor: "bg-purple-500"
    },
    {
      name: "Kit Unha Encravada",
      description: "Solução completa para prevenção e alívio",
      price: "R$ 75,90",
      originalPrice: "R$ 95,00",
      image: "✂️",
      features: ["Cortador especializado", "Protetor de silicone", "Creme cicatrizante", "Instruções detalhadas"],
      badge: "Promoção",
      badgeColor: "bg-red-500"
    },
    {
      name: "Hidratante Intensivo Noturno",
      description: "Reparação profunda durante o sono",
      price: "R$ 39,90",
      originalPrice: "R$ 55,00",
      image: "🌙",
      features: ["Ação noturna", "Fórmula concentrada", "Absorção rápida", "Fragrância suave"],
      badge: "Oferta",
      badgeColor: "bg-orange-500"
    },
    {
      name: "Kit Pés Diabéticos",
      description: "Cuidado especializado para diabéticos",
      price: "R$ 139,90",
      originalPrice: "R$ 180,00",
      image: "💙",
      features: ["Produtos específicos", "pH balanceado", "Testado clinicamente", "Aprovado por médicos"],
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
      description: "Manipulados para condições particulares",
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
                  <div className="text-4xl mb-4">{product.image}</div>
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
              <Truck className="w-4 h-4 text-blue-500 mr-2" />
              <span>Entrega Rápida</span>
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

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              onClick={() => handleWhatsApp("Consulta para produtos manipulados")}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-semibold shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
            >
              Agendar Consulta para Manipulados
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;