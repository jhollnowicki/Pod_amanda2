import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle,
  Instagram,
  Car,
  Bus,
  Wifi,
  CreditCard,
  Shield,
  Heart,
  Accessibility,
  Building
} from 'lucide-react';

const ContactSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de agendar uma consulta no Espaço Podologia Amanda Matos. Qual a melhor data disponível?'
    );
    window.open(`https://wa.me/5541997312878?text=${message}`, '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+554137977333', '_self');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/espaco.saudeebem_estar/', '_blank');
  };

  const handleMaps = () => {
    const address = 'Rua Rio Eufrates, n°81 - sala 104 - iguaçu Fazenda Rio Grande - PR';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank');
  };

  const workingHours = [
    { day: 'Segunda-feira', hours: 'Manhã: 08:00 - 11:00 | Tarde: 13:00 - 19:00' , available: true },
    { day: 'Terça-feira', hours: 'Manhã: 08:00 - 11:00 | Tarde: 13:00 - 19:00', available: true },
    { day: 'Quarta-feira', hours: 'Manhã: 08:00 - 11:00 | Tarde: 13:00 - 19:00', available: true },
    { day: 'Quinta-feira', hours: 'Manhã: 08:00 - 11:00 | Tarde: 13:00 - 19:00', available: true },
    { day: 'Sexta-feira', hours: 'Manhã: 08:00 - 11:00 | Tarde: 13:00 - 19:00', available: true },
    { day: 'Sábado', hours: '08:00 - 13:00', available: true },
    { day: 'Domingo', hours: 'Fechado', available: false }
  ];

  const amenities = [
    { icon: Car, text: 'Estacionamento gratuito' },
    { icon: Bus, text: 'Acesso por transporte público' },
    { icon: Wifi, text: 'Wi-Fi gratuito' },
    { icon: CreditCard, text: 'Aceita cartões' },
    { icon: Shield, text: 'Ambiente seguro' },
    { icon: Heart, text: 'Atendimento humanizado' },
    { icon: Accessibility, text: 'Acessibilidade ', color: '#d89ca0' },
    { icon: Building,   text: "Elevador disponível",         color: "#d89ca0" },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-light/50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Localização e Contato
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-pink">Visite Nossa Clínica</span>
            <br />
            <span className="text-foreground">em Fazenda Rio Grande</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Localizada no coração de Fazenda Rio Grande, nossa clínica oferece 
            fácil acesso e toda a comodidade que você merece.
          </p>
        </div>

        {/* Main Contact Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Contact Cards */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <Card className="bg-green-50 border-green-200 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer" onClick={handleWhatsApp}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-green-800">WhatsApp</CardTitle>
                    <CardDescription className="text-green-600">Resposta rápida garantida</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 font-semibold mb-4">(41) 99731-2878</p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsApp();
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-blue-50 border-blue-200 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer" onClick={handlePhone}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-800">Telefone</CardTitle>
                    <CardDescription className="text-blue-600">Ligue para agendar</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 font-semibold mb-4">(41) 3797-7333</p>
                <Button 
                  variant="outline"
                  className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePhone();
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card className="bg-pink-50 border-pink-200 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer" onClick={handleInstagram}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-pink-800">Instagram</CardTitle>
                    <CardDescription className="text-pink-600">Acompanhe nosso trabalho</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-pink-700 font-semibold mb-4">@espaco.saudeebem_estar</p>
                <Button 
                  variant="outline"
                  className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInstagram();
                  }}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Seguir no Instagram
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right - Address and Map */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">Endereço</CardTitle>
                    <CardDescription>Fácil acesso e estacionamento</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground">Amanda Matos - Podologia e Saúde</p>
                  <p className="text-muted-foreground">Rua Rio Eufrates, n°81 - sala 104 - Iguaçu</p>
                  <p className="text-muted-foreground">Edifício Belaver 1° andar</p>
                  <p className="text-muted-foreground">Fazenda Rio Grande - PR</p>
                  <p className="text-muted-foreground">CEP: 83833-088</p>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={handleMaps}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-card overflow-hidden">
              <div 
                className="w-full h-64 bg-gradient-soft flex items-center justify-center cursor-pointer group"
                onClick={handleMaps}
              >
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-semibold text-foreground">Clique para ver no mapa</p>
                    <p className="text-sm text-muted-foreground">Localização exata da clínica</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Working Hours */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Hours */}
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-foreground">Horários de Funcionamento</CardTitle>
                  <CardDescription>Atendimento de segunda a sábado</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className={`font-semibold ${schedule.available ? 'text-green-600' : 'text-red-500'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary-light/20 rounded-xl">
                <p className="text-sm text-primary font-medium">
                  💡 Dica: Agende com antecedência para garantir o melhor horário!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Amenities */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Comodidades</CardTitle>
              <CardDescription>Tudo pensado para seu conforto</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => {
                  const IconComponent = amenity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-soft rounded-xl">
                      <IconComponent className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground font-medium">{amenity.text}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-red-50 border-red-200 shadow-card max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-900">
                Atendimento de Emergência
              </h3>
              <p className="text-red-800">
                Para situações urgentes (principalmente diabéticos com feridas), 
                entre em contato imediatamente pelo WhatsApp ou telefone.
              </p>
              <Button 
                onClick={handleWhatsApp}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contato de Emergência
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;