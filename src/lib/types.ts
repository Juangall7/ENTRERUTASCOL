
export interface Municipality {
  id: string;
  name: string;
  slug: string;
  description: string;
  history: string;
  image: string;
  culture: string[];
  spots: TouristSpot[];
  products: Product[];
}

export interface TouristSpot {
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'artesania' | 'gastronomia' | 'experiencia';
  municipalitySlug: string;
}

export interface Activity {
  id: string;
  title: string;
  category: 'ecoturismo' | 'cultura' | 'gastronomia' | 'aventura';
  description: string;
  image: string;
  duration: string;
  price: number;
}

export interface TourPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  municipalityIds: string[];
}
