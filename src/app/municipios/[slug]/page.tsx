
"use client";

import { useParams } from 'next/navigation';
import { municipalities } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/components/cart/CartContext';
import { History, MapPin, Palette, ShoppingBag, Landmark, Compass } from 'lucide-react';
import Link from 'next/link';

export default function MunicipalityPage() {
  const { slug } = useParams();
  const muni = municipalities.find(m => m.slug === slug);
  const { addToCart } = useCart();

  if (!muni) return <div className="p-20 text-center">Municipio no encontrado</div>;

  return (
    <div className="pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh]">
        <img src={muni.image} alt={muni.name} className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-headline italic mb-4">{muni.name}</h1>
            <p className="text-xl max-w-2xl opacity-90">{muni.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-primary/20">
              <TabsTrigger value="info">Información</TabsTrigger>
              <TabsTrigger value="spots">Sitios Turísticos</TabsTrigger>
              <TabsTrigger value="culture">Cultura</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info" className="p-6 bg-white rounded-xl shadow-sm border mt-4">
              <div className="space-y-8">
                <section>
                  <h3 className="text-2xl font-headline font-bold text-secondary flex items-center gap-2 mb-4">
                    <History className="h-6 w-6" /> Historia
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{muni.history || "Municipio emblemático de Norte de Santander con una rica historia ligada al desarrollo del departamento."}</p>
                </section>

                {muni.corregimientos.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-headline font-bold text-secondary flex items-center gap-2 mb-4">
                      <Compass className="h-6 w-6" /> Corregimientos
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {muni.corregimientos.map((cor, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          {cor}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <h3 className="text-2xl font-headline font-bold text-secondary flex items-center gap-2 mb-4">
                    <Landmark className="h-6 w-6" /> Datos Relevantes
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {muni.name} se destaca por su arquitectura única y su rol estratégico en el departamento de Norte de Santander. 
                    Un destino que combina lo antiguo con lo moderno.
                  </p>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="spots" className="mt-4">
              {muni.spots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {muni.spots.map((spot, i) => (
                    <Card key={i} className="overflow-hidden">
                      <img src={spot.image} alt={spot.name} className="w-full h-40 object-cover" />
                      <CardHeader>
                        <CardTitle className="text-lg">{spot.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{spot.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center text-muted-foreground bg-white rounded-xl border italic">
                  Próximamente más sitios turísticos de {muni.name}.
                </div>
              )}
            </TabsContent>

            <TabsContent value="culture" className="p-6 bg-white rounded-xl shadow-sm border mt-4">
              <h3 className="text-2xl font-headline font-bold text-secondary flex items-center gap-2 mb-6">
                <Palette className="h-6 w-6" /> Tradiciones y Arte
              </h3>
              {muni.culture.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {muni.culture.map((c, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                      <span className="font-bold">{c}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground italic">Cultura y tradiciones locales por descubrir.</p>
              )}
            </TabsContent>
          </Tabs>

          {/* Mini Store for this municipality */}
          {muni.products.length > 0 && (
            <section>
              <h2 className="text-3xl font-headline font-bold text-secondary flex items-center gap-3 mb-8">
                <ShoppingBag className="h-8 w-8" /> Productos de {muni.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {muni.products.map((product) => (
                  <Card key={product.id} className="flex gap-4 p-4 items-center">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold">{product.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-secondary">${product.price.toLocaleString()}</span>
                        <Button size="sm" onClick={() => addToCart(product, 'product')}>Añadir</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <Card className="bg-secondary text-white sticky top-24">
            <CardHeader>
              <CardTitle className="text-2xl font-headline italic">Planea tu visita</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm opacity-90">Contáctanos para organizar un recorrido personalizado por {muni.name}.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Ubicación: Norte de Santander</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full bg-white text-secondary hover:bg-white/90 font-bold border-none" asChild>
                <Link href="/contacto">Solicitar Información</Link>
              </Button>
            </CardFooter>
          </Card>
        </aside>
      </div>
    </div>
  );
}
