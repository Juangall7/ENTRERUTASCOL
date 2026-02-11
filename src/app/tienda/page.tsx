
"use client";

import { tourPackages, municipalities } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/components/cart/CartContext';
import { ShoppingBag, Tag, Clock } from 'lucide-react';

export default function TiendaPage() {
  const { addToCart } = useCart();

  const allProducts = municipalities.flatMap(m => m.products);

  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-headline font-bold text-secondary italic">Tienda Entre Rutas</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Lleva un pedazo de Norte de Santander a tu casa o reserva tu próxima gran experiencia.
        </p>
      </header>

      {/* Tour Packages */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <Tag className="h-8 w-8 text-secondary" />
          <h2 className="text-3xl font-headline font-bold">Paquetes Turísticos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-secondary mb-4">
                    <Clock className="h-4 w-4" /> {pkg.duration}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-primary-foreground bg-primary px-3 py-1 rounded-lg">
                    ${pkg.price.toLocaleString()}
                  </span>
                  <Button onClick={() => addToCart(pkg, 'package')}>Añadir al carrito</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Artisan Products */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <ShoppingBag className="h-8 w-8 text-secondary" />
          <h2 className="text-3xl font-headline font-bold">Artesanías y Gastronomía</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                />
              </div>
              <CardHeader className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{product.category}</span>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>
              </CardContent>
              <CardFooter className="p-4 border-t flex items-center justify-between">
                <span className="font-bold text-secondary">${product.price.toLocaleString()}</span>
                <Button size="sm" onClick={() => addToCart(product, 'product')}>Comprar</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
