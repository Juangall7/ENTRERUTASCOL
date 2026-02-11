
import { Municipality, Activity, TourPackage, Product } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/default/800/600';

export const municipalities: Municipality[] = [
  {
    id: '1',
    name: 'Cúcuta',
    slug: 'cucuta',
    description: 'La Perla del Norte, ciudad fronteriza y comercial llena de historia.',
    history: 'Fundada en 1733, fue el escenario de la Batalla de Cúcuta y cuna del Congreso de Cúcuta de 1821.',
    image: getImg('hero-cucuta'),
    culture: ['Bambuco', 'Música de cuerda', 'Festivales de teatro'],
    spots: [
      { name: 'Catedral de San José', description: 'Impresionante templo neogótico.', image: 'https://picsum.photos/seed/cuc1/400/300' },
      { name: 'Parque Santander', description: 'El corazón verde de la ciudad.', image: 'https://picsum.photos/seed/cuc2/400/300' }
    ],
    products: [
      { id: 'p1', name: 'Pastel de Garbanzo', price: 2500, description: 'Sabor tradicional de la frontera.', image: getImg('gastronomy-pasteles'), category: 'gastronomia', municipalitySlug: 'cucuta' }
    ]
  },
  {
    id: '2',
    name: 'Ocaña',
    slug: 'ocana',
    description: 'Tierra de colonialismo y paisajes de montaña.',
    history: 'Ciudad fundada en 1570, famosa por la Convención de Ocaña de 1828.',
    image: getImg('ocaña-colonial'),
    culture: ['Danza de los Diablos', 'Artesanía en barro'],
    spots: [
      { name: 'Plaza 29 de Mayo', description: 'Centro histórico colonial.', image: 'https://picsum.photos/seed/oca1/400/300' },
      { name: 'Los Estoraques', description: 'Formaciones geológicas únicas en el mundo.', image: 'https://picsum.photos/seed/oca2/400/300' }
    ],
    products: [
      { id: 'p2', name: 'Cerámica de Barro Ocañera', price: 35000, description: 'Piezas únicas hechas a mano.', image: getImg('artisan-crafts'), category: 'artesania', municipalitySlug: 'ocana' }
    ]
  },
  {
    id: '3',
    name: 'Pamplona',
    slug: 'pamplona',
    description: 'La Ciudad Mitrada, centro universitario y religioso.',
    history: 'Fundada en 1549, es una de las ciudades más antiguas y conservadas de Colombia.',
    image: getImg('pamplona-cathedral'),
    culture: ['Semana Santa', 'Música sacra'],
    spots: [
      { name: 'Catedral de Pamplona', description: 'Arquitectura religiosa de primer nivel.', image: 'https://picsum.photos/seed/pam1/400/300' },
      { name: 'Museo de Arte Moderno Ramírez Villamizar', description: 'Legado de un grande de la escultura.', image: 'https://picsum.photos/seed/pam2/400/300' }
    ],
    products: [
      { id: 'p3', name: 'Dulces Abrillantados', price: 12000, description: 'Famosos dulces de la ciudad mitrada.', image: 'https://picsum.photos/seed/dulces/400/300', category: 'gastronomia', municipalitySlug: 'pamplona' }
    ]
  }
];

export const activities: Activity[] = [
  {
    id: 'a1',
    title: 'Senderismo en Los Estoraques',
    category: 'aventura',
    description: 'Camina entre formaciones milenarias en un paisaje lunar.',
    image: getImg('hiking-adventure'),
    duration: '4 horas',
    price: 45000
  },
  {
    id: 'a2',
    title: 'Ruta del Café en Chinácota',
    category: 'gastronomia',
    description: 'Aprende sobre el proceso del café desde la semilla hasta la taza.',
    image: getImg('coffee-plantation'),
    duration: '6 horas',
    price: 85000
  },
  {
    id: 'a3',
    title: 'Tour Histórico de Cúcuta',
    category: 'cultura',
    description: 'Recorre los sitios que marcaron el nacimiento de la Gran Colombia.',
    image: getImg('hero-cucuta'),
    duration: '3 horas',
    price: 30000
  }
];

export const tourPackages: TourPackage[] = [
  {
    id: 'pkg1',
    title: 'Ruta Histórica y Colonial',
    description: 'Un viaje de 3 días por Cúcuta, Villa del Rosario y Pamplona.',
    price: 450000,
    duration: '3 días',
    image: 'https://picsum.photos/seed/pkg1/800/500',
    municipalityIds: ['1', '3']
  },
  {
    id: 'pkg2',
    title: 'Aventura en los Estoraques',
    description: 'Explora Ocaña y la reserva natural Los Estoraques.',
    price: 320000,
    duration: '2 días',
    image: 'https://picsum.photos/seed/pkg2/800/500',
    municipalityIds: ['2']
  }
];
