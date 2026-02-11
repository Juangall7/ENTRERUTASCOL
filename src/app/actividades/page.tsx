
import { activities } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Mountain, Coffee, Utensils, Clock, CheckCircle2 } from 'lucide-react';

export default function ActividadesPage() {
  const categories = [
    { id: 'todos', label: 'Todos', icon: null },
    { id: 'aventura', label: 'Aventura', icon: <Mountain className="h-4 w-4" /> },
    { id: 'cultura', label: 'Cultura', icon: <Camera className="h-4 w-4" /> },
    { id: 'gastronomia', label: 'Gastronomía', icon: <Utensils className="h-4 w-4" /> },
    { id: 'ecoturismo', label: 'Ecoturismo', icon: <Coffee className="h-4 w-4" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-headline font-bold text-secondary italic">Planes y Experiencias</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ¿Buscando algo diferente? Elige tu próxima aventura entre nuestras categorías seleccionadas.
        </p>
      </header>

      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center mb-12">
          {categories.map((cat) => (
            <TabsTrigger 
              key={cat.id} 
              value={cat.id} 
              className="data-[state=active]:bg-secondary data-[state=active]:text-white rounded-full border px-6 py-2 flex items-center gap-2"
            >
              {cat.icon} {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="todos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act) => (
              <ActivityCard key={act.id} activity={act} />
            ))}
          </div>
        </TabsContent>
        {/* Simple mock for other tabs, would filter in real app */}
        {['aventura', 'cultura', 'gastronomia', 'ecoturismo'].map(val => (
           <TabsContent key={val} value={val}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activities.filter(a => a.category === val).map((act) => (
                  <ActivityCard key={act.id} activity={act} />
                ))}
              </div>
           </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function ActivityCard({ activity }: { activity: any }) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all border-secondary/10">
      <div className="relative h-56">
        <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary shadow-lg">
          {activity.category.toUpperCase()}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{activity.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">{activity.description}</p>
        <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
          <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {activity.duration}</div>
          <div className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-500" /> Seguro incluido</div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <span className="text-lg font-bold text-secondary">${activity.price.toLocaleString()}</span>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">Reservar Cupo</Button>
      </CardFooter>
    </Card>
  );
}
