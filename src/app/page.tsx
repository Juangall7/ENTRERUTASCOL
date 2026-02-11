
import { municipalities, activities } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SearchAndRecommend } from '@/components/SearchAndRecommend';
import Link from 'next/link';
import { MapPin, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/nortesantander/1920/1080" 
            alt="Norte de Santander Landscape" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 space-y-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
            Entre Rutas y Montañas,<br/><span className="text-primary italic">Norte de Santander te espera</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl opacity-90 font-body animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Explora la historia colonial de Ocaña, la fe de Pamplona y el vibrante comercio de Cúcuta. Una tierra de contrastes y tradiciones por descubrir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-bold px-8" asChild>
              <Link href="/municipios">Explorar Municipios</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 font-bold px-8" asChild>
              <Link href="/tienda">Reservar Paquete</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Search & Recommendation Section */}
        <SearchAndRecommend />

        {/* Featured Municipalities */}
        <section className="mt-20">
          <div className="flex justify-between items-end mb-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-headline font-bold text-secondary">Destinos Imperdibles</h2>
              <p className="text-muted-foreground">Nuestros municipios más icónicos y llenos de encanto.</p>
            </div>
            <Link href="/municipios" className="hidden sm:flex items-center gap-2 text-secondary font-bold hover:underline">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {municipalities.map((muni) => (
              <Link key={muni.id} href={`/municipios/${muni.slug}`}>
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={muni.image} 
                      alt={muni.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                      <Star className="h-3 w-3 fill-current" /> Destacado
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl font-headline italic">
                      <MapPin className="h-5 w-5 text-secondary" /> {muni.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{muni.description}</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary">Explorar {muni.name}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Activities */}
        <section className="mt-24 py-16 bg-primary/5 rounded-[3rem] px-8 md:px-16">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-headline font-bold text-secondary">¿Qué planes tenemos para ti?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Desde la adrenalina de los deportes extremos hasta la paz del aviturismo y la cata de café.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act) => (
              <Card key={act.id} className="bg-white hover:border-secondary/50 transition-colors">
                <CardHeader className="p-0">
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2 py-1 rounded">{act.category}</span>
                    <span className="text-sm font-bold text-primary-foreground bg-primary px-2 py-1 rounded-md shadow-sm">${act.price.toLocaleString()}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{act.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{act.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 text-secondary font-bold" asChild>
                    <Link href="/actividades">Reservar Ahora <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
