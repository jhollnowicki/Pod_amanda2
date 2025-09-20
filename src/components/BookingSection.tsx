import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    time: '',
    notes: ''
  });

  const services = [
    { value: 'unha-encravada', label: 'Unhas Encravadas', duration: '30 min', price: 'R$ 80,00' },
    { value: 'laser-verrugas', label: 'Laser para Verrugas', duration: '45 min', price: 'R$ 120,00' },
    { value: 'pe-diabetico', label: 'Cuidados Pé Diabético', duration: '60 min', price: 'R$ 150,00' },
    { value: 'calos', label: 'Calos e Calosidades', duration: '40 min', price: 'R$ 90,00' },
    { value: 'micose-unhas', label: 'Micose das Unhas', duration: '45 min', price: 'R$ 110,00' },
    { value: 'limpeza-geral', label: 'Limpeza Geral dos Pés', duration: '50 min', price: 'R$ 100,00' },
    { value: 'consulta-avaliacao', label: 'Consulta e Avaliação', duration: '40 min', price: 'R$ 70,00' },
    { value: 'produto-manipulado', label: 'Produto Manipulado', duration: '20 min', price: 'Consultar' }
  ];

  // Horários disponíveis (simulando agenda)
  const availableTimes = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !formData.name || !formData.phone || !formData.service || !formData.time) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const selectedService = services.find(s => s.value === formData.service);
    const dateFormatted = format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

    const message = encodeURIComponent(
      `🦶 *AGENDAMENTO - AMANDA MATOS PODOLOGIA*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📞 *Telefone:* ${formData.phone}\n` +
      `${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}` +
      `🔧 *Serviço:* ${selectedService?.label}\n` +
      `⏱️ *Duração:* ${selectedService?.duration}\n` +
      `💰 *Valor:* ${selectedService?.price}\n` +
      `📅 *Data:* ${dateFormatted}\n` +
      `🕐 *Horário:* ${formData.time}\n` +
      `${formData.notes ? `📝 *Observações:* ${formData.notes}\n` : ''}` +
      `\n✅ *Por favor, confirme este agendamento!*`
    );

    window.open(`https://wa.me/5541997312878?text=${message}`, '_blank');

    // Reset form
    setFormData({ name: '', phone: '', email: '', service: '', time: '', notes: '' });
    setSelectedDate(undefined);
  };

  const selectedService = services.find(s => s.value === formData.service);

  // Função para verificar se a data é válida (não domingos e não datas passadas)
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0; // Domingo = 0
  };

  return (
    <section id="booking" className="section-padding bg-gradient-soft">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-light/50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Agendamento Online
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-pink">Agende Sua Consulta</span>
            <br />
            <span className="text-foreground">de Forma Rápida e Fácil</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selecione o serviço desejado, escolha a melhor data e horário para você.
            Nossa equipe entrará em contato para confirmar seu agendamento.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-0 overflow-hidden">
            <CardHeader className="bg-primary-light/20 text-center">
              <CardTitle className="text-2xl text-foreground flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 mr-3 text-primary" />
                Formulário de Agendamento
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Preencha os dados abaixo e receba a confirmação via WhatsApp
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dados Pessoais */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary" />
                    Dados Pessoais
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Digite seu nome completo"
                        className="border-brand-gray focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        Telefone/WhatsApp *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(41) 99731-2878"
                        className="border-brand-gray focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email (opcional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                      className="border-brand-gray focus:border-primary"
                    />
                  </div>
                </div>

                {/* Serviço */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                    Serviço Desejado
                  </h3>

                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">
                      Escolha o Serviço *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="border-brand-gray focus:border-primary">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-brand-gray shadow-hover z-50">
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            <div className="flex flex-col">
                              <span className="font-medium">{service.label}</span>
                              <span className="text-sm text-muted-foreground">
                                {service.duration} • {service.price}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedService && (
                    <Card className="bg-primary-light/10 border-primary/20">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-foreground">{selectedService.label}</h4>
                            <p className="text-sm text-muted-foreground">
                              Duração estimada: {selectedService.duration}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">{selectedService.price}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Data e Horário */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Data e Horário
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        Escolha a Data *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-brand-gray",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : <span>Escolha uma data</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white border-brand-gray shadow-hover z-50" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={isDateDisabled}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <p className="text-xs text-muted-foreground">
                        Atendemos de segunda a sábado
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        Escolha o Horário *
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger className="border-brand-gray focus:border-primary">
                          <SelectValue placeholder="Selecione um horário" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-brand-gray shadow-hover z-50">
                          {availableTimes.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        Horários disponíveis podem variar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Observações */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-foreground font-medium">
                    Observações (opcional)
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Alguma informação adicional sobre seu caso?"
                    className="border-brand-gray focus:border-primary resize-none"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="
                        w-full sm:w-auto
                        bg-[#D6A7AF] text-white hover:opacity-90
                        px-4 py-4 font-semibold shadow-card hover:shadow-hover
                        md:hover:scale-105
                        !whitespace-normal break-words text-center leading-snug
                        rounded-xl
                      "
                  >
                    <MessageCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="block min-w-0">Enviar Agendamento pelo WhatsApp</span>
                    <ArrowRight className="w-5 h-5 ml-3 flex-shrink-0" />
                  </Button>
                  

                  <p className="text-sm text-muted-foreground mt-4">
                    ✅ Ao enviar, você será direcionado ao WhatsApp para confirmação
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white shadow-card border-0 text-center p-6">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground">Confirmação Rápida</h3>
                <p className="text-sm text-muted-foreground">
                  Receba a confirmação do seu agendamento em até 30 minutos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card border-0 text-center p-6">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <CalendarIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground">Flexibilidade</h3>
                <p className="text-sm text-muted-foreground">
                  Reagende ou cancele com até 24h de antecedência
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card border-0 text-center p-6">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-foreground">Suporte Direto</h3>
                <p className="text-sm text-muted-foreground">
                  Tire suas dúvidas diretamente com nossa equipe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;