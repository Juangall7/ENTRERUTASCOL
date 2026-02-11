
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline italic">Entre Rutas</h3>
            <p className="text-sm opacity-90">
              Promovemos la riqueza cultural, histórica y natural de Norte de Santander, Colombia. Descubre lo inexplorado.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 cursor-pointer hover:text-secondary" />
              <Facebook className="h-5 w-5 cursor-pointer hover:text-secondary" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-secondary" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Municipios</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/municipios/cucuta">Cúcuta</Link></li>
              <li><Link href="/municipios/ocana">Ocaña</Link></li>
              <li><Link href="/municipios/pamplona">Pamplona</Link></li>
              <li><Link href="/municipios/chinacota">Chinácota</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/tienda">Tienda de Paquetes</Link></li>
              <li><Link href="/actividades">Ecoturismo</Link></li>
              <li><Link href="/actividades">Cultura</Link></li>
              <li><Link href="/contacto">Contáctanos</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-1" />
              <span>Av. Libertadores, Cúcuta, Norte de Santander</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>+57 (300) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>info@entrerutas.co</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-xs opacity-70">
          <p>© {new Date().getFullYear()} Entre Rutas - Norte de Santander. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
