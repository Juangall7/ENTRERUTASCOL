
"use client";

import { useState, useMemo } from 'react';
import { municipalities } from '@/lib/data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function MunicipiosPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMunicipalities = useMemo(() => {
    return municipalities.filter(m => 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.corregimientos.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm]);

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
        <Input 
          placeholder="Buscar por nombre, corregimiento o descripción..." 
          className="pl-10 rounded-full h-12 bg-white/50 border-secondary/20 focus-visible:ring-secondary" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMunicipalities.map((muni) => (
          <Link key={muni.id} href={`/municipios/${muni.slug}`}>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-none shadow-md bg-white">
              <div className="relative h-72">
                <img src={muni.image} alt={muni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-headline italic font-bold flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" /> {muni.name}
                  </h3>
                  <p className="text-xs opacity-80 mt-1">{muni.corregimientos.length} corregimientos</p>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{muni.description}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-6 flex gap-2 flex-wrap">
                {muni.culture.length > 0 ? muni.culture.slice(0, 2).map((c, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase bg-primary/20 text-secondary-foreground px-2 py-1 rounded-full">{c}</span>
                )) : (
                  <span className="text-[10px] font-bold uppercase bg-muted text-muted-foreground px-2 py-1 rounded-full">Norte de Santander</span>
                )}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {filteredMunicipalities.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No se encontraron municipios con ese nombre o corregimiento.
        </div>
      )}
    </div>
  );
}
