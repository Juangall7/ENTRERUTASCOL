
"use client";

import { useCart } from '@/components/cart/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-6">
        <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag className="h-12 w-12 text-secondary" />
        </div>
        <h1 className="text-4xl font-headline font-bold">Tu carrito está vacío</h1>
        <p className="text-muted-foreground">¿Aún no has descubierto la magia de Norte de Santander?</p>
        <Button size="lg" asChild className="bg-secondary text-white">
          <Link href="/tienda">Ir a la tienda</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-headline font-bold text-secondary mb-12 flex items-center gap-4">
        <ShoppingBag className="h-10 w-10" /> Tu Carrito de Compras
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="flex p-4 gap-6 items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.type}</span>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                    </div>
                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm font-medium">Cantidad: {item.quantity}</span>
                    <span className="text-xl font-bold text-secondary">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          <Button variant="outline" className="text-muted-foreground" onClick={clearCart}>
            Vaciar Carrito
          </Button>
        </div>

        <aside>
          <Card className="sticky top-24 border-secondary/20 shadow-xl">
            <CardHeader className="bg-secondary/5 border-b">
              <CardTitle className="text-2xl font-headline">Resumen de Compra</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Impuestos (Incluidos)</span>
                <span>$0</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-2xl font-bold text-secondary">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
            </CardContent>
            <div className="p-6 pt-0 space-y-4">
              <Button className="w-full bg-secondary text-white h-12 text-lg font-bold">
                Pagar con Wompi <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/tienda" className="flex items-center justify-center text-sm font-bold text-muted-foreground hover:text-secondary gap-2">
                <ArrowLeft className="h-4 w-4" /> Seguir comprando
              </Link>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
