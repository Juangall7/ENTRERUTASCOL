
import { municipalities } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function MunicipiosPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-5xl font-headline font-bold text-secondary italic">Municipios de Norte de Santander</h1>
        <p className="text-muted-foreground">
          Descubre los 40 municipios que componen nuestro departamento, cada uno con su propia historia, clima y sabores únicos.
        </p>
      </header>

      <div className="max-w-md mx-auto relative mb-12">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Buscar por nombre o clima..." className="pl-10 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {municipalities.map((muni) => (
          <Link key={muni.id} href={`/municipios/${muni.slug}`}>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-none shadow-md">
              <div className="relative h-72">
                <img src={muni.image} alt={muni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-headline italic font-bold flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" /> {muni.name}
                  </h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">{muni.description}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-6 flex gap-2 flex-wrap">
                {muni.culture.slice(0, 2).map((c, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase bg-primary/20 text-secondary-foreground px-2 py-1 rounded-full">{c}</span>
                ))}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
