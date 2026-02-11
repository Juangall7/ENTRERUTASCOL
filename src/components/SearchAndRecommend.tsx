
"use client";

import { useState } from 'react';
import { Sparkles, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { activities } from '@/lib/data';

export function SearchAndRecommend() {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleRecommend = () => {
    setLoading(true);
    // Simulate AI logic
    setTimeout(() => {
      const filtered = activities.filter(a => 
        a.title.toLowerCase().includes(query.toLowerCase()) || 
        a.description.toLowerCase().includes(query.toLowerCase())
      );
      setRecommendations(filtered.length > 0 ? filtered.slice(0, 2) : [activities[0]]);
      setLoading(false);
    }, 800);
  };

  return (
    <section className="py-12 bg-white/50 backdrop-blur-sm rounded-3xl border shadow-xl mx-4 -mt-12 relative z-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-headline font-bold text-secondary flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6" /> Recomiéndame algo
          </h2>
          <p className="text-muted-foreground">¿Qué tipo de aventura buscas hoy en Norte de Santander?</p>
        </div>

        <div className="flex gap-2 max-w-2xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Ej: Caminata ecológica, historia colonial, cata de café..." 
              className="pl-10 h-12 rounded-full border-primary/20 focus-visible:ring-primary"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleRecommend()}
            />
          </div>
          <Button 
            onClick={handleRecommend}
            className="h-12 px-8 rounded-full bg-secondary hover:bg-secondary/90 text-white font-bold"
            disabled={loading}
          >
            {loading ? 'Pensando...' : 'Explorar'}
          </Button>
        </div>

        {recommendations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
            {recommendations.map((rec) => (
              <Card key={rec.id} className="overflow-hidden border-secondary/20 bg-secondary/5">
                <div className="flex">
                  <div className="w-1/3 h-24 overflow-hidden">
                    <img src={rec.image} alt={rec.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="w-2/3 p-3 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm">{rec.title}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">{rec.description}</p>
                    </div>
                    <Link href="/actividades" className="text-xs font-bold text-secondary flex items-center gap-1 hover:underline">
                      Saber más <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import Link from 'next/link';
