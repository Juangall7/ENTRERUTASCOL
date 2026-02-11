
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactoPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensaje Enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-headline font-bold text-secondary italic">Habla con Nosotros</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ¿Tienes dudas sobre una ruta o quieres vender tus productos locales? Estamos aquí para escucharte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <Card className="bg-primary/10 border-none">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Teléfono</h4>
                  <p className="text-sm text-muted-foreground">+57 (300) 123-4567</p>
                  <p className="text-xs text-muted-foreground">Lun - Sáb: 8am - 6pm</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/10 border-none">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Correo Electrónico</h4>
                  <p className="text-sm text-muted-foreground">info@entrerutas.co</p>
                  <p className="text-xs text-muted-foreground">Soporte 24/7</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-accent/10 border-none">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="bg-accent p-3 rounded-lg text-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Ubicación</h4>
                  <p className="text-sm text-muted-foreground">Av. Libertadores #11-54</p>
                  <p className="text-xs text-muted-foreground">Cúcuta, Norte de Santander</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="h-64 bg-muted rounded-2xl overflow-hidden grayscale">
            {/* Mock Map Placeholder */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-primary/20">
              <span className="font-headline text-xl">Mapa de Norte de Santander</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="shadow-2xl border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-secondary">Envíanos un mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Tu nombre..." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="correo@ejemplo.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-secondary text-white hover:bg-secondary/90 h-12 text-lg font-bold" disabled={loading}>
                {loading ? 'Enviando...' : (
                  <span className="flex items-center gap-2"><Send className="h-5 w-5" /> Enviar Mensaje</span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
