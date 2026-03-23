
import { Municipality, Activity, TourPackage, Product } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || `https://picsum.photos/seed/${id}/800/600`;

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
    ],
    corregimientos: ['Aguaclara', 'Banco de Arena', 'Buena Esperanza', 'Guaramito', 'Palmarito', 'Puerto Villamizar', 'Ricaurte', 'San Faustino', 'San Pedro']
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
    ],
    corregimientos: ['Aguas Claras', 'Buenavista', 'La Ermita', 'Otaré', 'Pueblo Nuevo', 'Portachuelo']
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
    ],
    corregimientos: ['Fontibón', 'Alcaparral', 'Iscalá']
  },
  {
    id: '4',
    name: 'Chinácota',
    slug: 'chinacota',
    description: 'El pueblo más lindo de Norte de Santander, famoso por su clima y café.',
    history: 'Lugar donde se firmó el pacto de paz de la Guerra de los Mil Días.',
    image: getImg('coffee-plantation'),
    culture: ['Feria de San Nicolás', 'Cata de café'],
    spots: [{ name: 'Parque Principal', description: 'Rodeado de flores y café.', image: 'https://picsum.photos/seed/chi1/400/300' }],
    products: [],
    corregimientos: ['La Colorada', 'Manzanares', 'Nueva Donjuana']
  },
  {
    id: '5',
    name: 'Villa del Rosario',
    slug: 'villa-del-rosario',
    description: 'Cuna de la Gran Colombia y escenario de la constitución de 1821.',
    history: 'Aquí nació el General Francisco de Paula Santander.',
    image: 'https://picsum.photos/seed/vdr/800/600',
    culture: ['Historia patria', 'Gastronomía binacional'],
    spots: [{ name: 'Templo Histórico', description: 'Lugar del Congreso de Cúcuta.', image: 'https://picsum.photos/seed/vdr1/400/300' }],
    products: [],
    corregimientos: ['Juan Frío', 'Palogordo', 'La Parada']
  },
  {
    id: '6',
    name: 'Los Patios',
    slug: 'los-patios',
    description: 'Municipio jardín de la frontera y centro residencial.',
    history: 'Antiguamente una zona de haciendas dedicadas al cacao y café.',
    image: 'https://picsum.photos/seed/patios/800/600',
    culture: ['Ciclismo', 'Ferias patronales'],
    spots: [{ name: 'Cerro de la Cruz', description: 'Mirador panorámico.', image: 'https://picsum.photos/seed/lp1/400/300' }],
    products: [],
    corregimientos: ['La Garita', 'Los Valles', 'El Volcán']
  },
  {
    id: '7',
    name: 'Salazar de Las Palmas',
    slug: 'salazar-de-las-palmas',
    description: 'Cuna del café en Colombia y paraíso hídrico.',
    history: 'Primer lugar donde se sembró café comercialmente en el país en el siglo XIX.',
    image: 'https://picsum.photos/seed/salazar/800/600',
    culture: ['Caficultura', 'Cultura hídrica'],
    spots: [{ name: 'Los Siete Chorros', description: 'Balneario natural icónico.', image: 'https://picsum.photos/seed/sal1/400/300' }],
    products: [],
    corregimientos: ['Carmen de Nazareth', 'La Laguna', 'Monte Cristo']
  },
  {
    id: '8',
    name: 'Ábrego',
    slug: 'abrego',
    description: 'El bello valle de la cruz, rodeado de imponentes montañas.',
    history: 'Ubicado en un valle fértil que sirve como despensa agrícola.',
    image: 'https://picsum.photos/seed/abrego/800/600',
    culture: ['Agricultura', 'Fiestas de la Santa Cruz'],
    spots: [{ name: 'Piedras Negras', description: 'Formaciones rocosas naturales.', image: 'https://picsum.photos/seed/abr1/400/300' }],
    products: [],
    corregimientos: ['El Recreo', 'La Labranza', 'Capitanejo']
  },
  {
    id: '9',
    name: 'Bochalema',
    slug: 'bochalema',
    description: 'Paraíso natural con aguas termales y un Samán legendario.',
    history: 'Pueblo de descanso famoso por su clima templado y fuentes de agua.',
    image: 'https://picsum.photos/seed/bochalema/800/600',
    culture: ['Ecoturismo', 'Cultura del agua'],
    spots: [{ name: 'El Samán', description: 'Árbol centenario gigante.', image: 'https://picsum.photos/seed/boch1/400/300' }],
    products: [],
    corregimientos: ['La Donjuana', 'San José de la Montaña']
  },
  {
    id: '10',
    name: 'Arboledas',
    slug: 'arboledas',
    description: 'Tierra de paz, montañas verdes y tradición panelera.',
    history: 'Municipio con una fuerte historia ligada a la agricultura.',
    image: 'https://picsum.photos/seed/arboledas/800/600',
    culture: ['Tradición panelera'],
    spots: [],
    products: [],
    corregimientos: ['Castro', 'San José de Castro', 'Villa Felisa']
  },
  { id: '11', name: 'Bucarasica', slug: 'bucarasica', description: 'Municipio de relieve quebrado y gente trabajadora.', history: '', image: 'https://picsum.photos/seed/buc11/800/600', culture: [], spots: [], products: [], corregimientos: ['La Sanjuana', 'La Curva'] },
  { id: '12', name: 'Cácota', slug: 'cacota', description: 'Tierra de alfareros y el valle de los frailejones.', history: '', image: 'https://picsum.photos/seed/cac12/800/600', culture: ['Alfarería'], spots: [], products: [], corregimientos: [] },
  { id: '13', name: 'Cachirá', slug: 'cachira', description: 'Portal de entrada al departamento desde el occidente.', history: '', image: 'https://picsum.photos/seed/cac13/800/600', culture: [], spots: [], products: [], corregimientos: ['La Vega', 'El Carmen'] },
  { id: '14', name: 'Chitagá', slug: 'chitaga', description: 'Municipio de páramos y duraznos.', history: '', image: 'https://picsum.photos/seed/chi14/800/600', culture: [], spots: [], products: [], corregimientos: ['El Cerrito', 'La Laguna'] },
  { id: '15', name: 'Convención', slug: 'convencion', description: 'La ciudad de las panosas y centro del Catatumbo.', history: '', image: 'https://picsum.photos/seed/con15/800/600', culture: [], spots: [], products: [], corregimientos: ['Las Mercedes', 'Honduras'] },
  { id: '16', name: 'Cucutilla', slug: 'cucutilla', description: 'Municipio de aguas cristalinas y paisajes de niebla.', history: '', image: 'https://picsum.photos/seed/cuc16/800/600', culture: [], spots: [], products: [], corregimientos: ['San José de la Montaña'] },
  { id: '17', name: 'Durania', slug: 'durania', description: 'Tierra de encanto y café.', history: '', image: 'https://picsum.photos/seed/dur17/800/600', culture: [], spots: [], products: [], corregimientos: ['La Esperanza'] },
  { id: '18', name: 'El Carmen', slug: 'el-carmen', description: 'Municipio de tradiciones coloniales y café.', history: '', image: 'https://picsum.photos/seed/car18/800/600', culture: [], spots: [], products: [], corregimientos: ['Guamalito'] },
  { id: '19', name: 'El Tarra', slug: 'el-tarra', description: 'Corazón del Catatumbo, tierra fértil.', history: '', image: 'https://picsum.photos/seed/tar19/800/600', culture: [], spots: [], products: [], corregimientos: ['Filo el Gringo'] },
  { id: '20', name: 'El Zulia', slug: 'el-zulia', description: 'Paso obligado hacia la costa y tierra de pescadores.', history: '', image: 'https://picsum.photos/seed/zul20/800/600', culture: [], spots: [], products: [], corregimientos: ['Astilleros', 'La Floresta'] },
  { id: '21', name: 'Gramalote', slug: 'gramalote', description: 'Municipio que renace con esperanza en su nuevo casco urbano.', history: 'Reconstruido totalmente tras el desastre de 2010.', image: 'https://picsum.photos/seed/gra21/800/600', culture: [], spots: [], products: [], corregimientos: ['Valderrama', 'Miraflor'] },
  { id: '22', name: 'Hacarí', slug: 'hacari', description: 'Pueblo de gente amable en la región del Catatumbo.', history: '', image: 'https://picsum.photos/seed/hac22/800/600', culture: [], spots: [], products: [], corregimientos: ['San José del Tarra'] },
  { id: '23', name: 'Herrán', slug: 'herran', description: 'Rincón de paz en la frontera sur del departamento.', history: '', image: 'https://picsum.photos/seed/her23/800/600', culture: [], spots: [], products: [], corregimientos: [] },
  { id: '24', name: 'La Esperanza', slug: 'la-esperanza', description: 'Municipio ganadero del occidente santandereano.', history: '', image: 'https://picsum.photos/seed/esp24/800/600', culture: [], spots: [], products: [], corregimientos: ['La Pedregosa', 'El Tropezón'] },
  { id: '25', name: 'La Playa de Belén', slug: 'la-playa', description: 'Monumento nacional, con fachadas blancas unificadas.', history: '', image: 'https://picsum.photos/seed/pla25/800/600', culture: [], spots: [], products: [], corregimientos: ['Aspasica'] },
  { id: '26', name: 'Labateca', slug: 'labateca', description: 'Tierra de fe, arquitectura colonial y clima de páramo.', history: '', image: 'https://picsum.photos/seed/lab26/800/600', culture: [], spots: [], products: [], corregimientos: ['San Bernardo'] },
  { id: '27', name: 'Lourdes', slug: 'lourdes', description: 'Municipio de gran devoción mariana y paisajes cafeteros.', history: '', image: 'https://picsum.photos/seed/lou27/800/600', culture: [], spots: [], products: [], corregimientos: [] },
  { id: '28', name: 'Mutiscua', slug: 'mutiscua', description: 'El jardín de Norte de Santander, famoso por sus hortalizas.', history: '', image: 'https://picsum.photos/seed/mut28/800/600', culture: [], spots: [], products: [], corregimientos: ['San Isidro'] },
  { id: '29', name: 'Pamplonita', slug: 'pamplonita', description: 'Pueblo de pesebres y clima fresco entre montañas.', history: '', image: 'https://picsum.photos/seed/pam29/800/600', culture: [], spots: [], products: [], corregimientos: ['El Diamante', 'Iscalá'] },
  { id: '30', name: 'Puerto Santander', description: 'Puerto comercial y fronterizo clave con Venezuela.', history: '', image: 'https://picsum.photos/seed/ps30/800/600', culture: [], spots: [], products: [], corregimientos: [], slug: 'puerto-santander' },
  { id: '31', name: 'Ragonvalia', slug: 'ragonvalia', description: 'Municipio cafetero y fronterizo de gran tradición.', history: '', image: 'https://picsum.photos/seed/rag31/800/600', culture: [], spots: [], products: [], corregimientos: [] },
  { id: '32', name: 'San Calixto', slug: 'san-calixto', description: 'Tierra de café y gente resiliente en la montaña.', history: '', image: 'https://picsum.photos/seed/sc32/800/600', culture: [], spots: [], products: [], corregimientos: [] },
  { id: '33', name: 'San Cayetano', slug: 'san-cayetano', description: 'Municipio histórico junto al río Zulia y centro minero.', history: '', image: 'https://picsum.photos/seed/sc33/800/600', culture: [], spots: [], products: [], corregimientos: ['Urimaco', 'Cornelio Reyes'] },
  { id: '34', name: 'Santiago', slug: 'santiago', description: 'El primer municipio del occidente, famoso por su puente.', history: '', image: 'https://picsum.photos/seed/san34/800/600', culture: [], spots: [], products: [], corregimientos: [] },
  { id: '35', name: 'Sardinata', slug: 'sardinata', description: 'Municipio minero, agropecuario y despensa de carbón.', history: '', image: 'https://picsum.photos/seed/sar35/800/600', culture: [], spots: [], products: [], corregimientos: ['Las Mercedes', 'La Victoria', 'San Martín'] },
  { id: '36', name: 'Silos', slug: 'silos', description: 'Tierra de tradiciones, clima frío y arquitectura colonial.', history: '', image: 'https://picsum.photos/seed/sil36/800/600', culture: [], spots: [], products: [], corregimientos: ['Bábega'] },
  { id: '37', name: 'Teorama', slug: 'teorama', description: 'La cuna de la piña y el café en el Catatumbo.', history: '', image: 'https://picsum.photos/seed/teo37/800/600', culture: [], spots: [], products: [], corregimientos: ['San Pablo', 'El Aserrío'] },
  { id: '38', name: 'Tibú', slug: 'tibu', description: 'Capital energética del departamento, rica en petróleo y palma.', history: '', image: 'https://picsum.photos/seed/tib38/800/600', culture: [], spots: [], products: [], corregimientos: ['La Gabarra', 'Pachelli', 'Campo Dos'] },
  { id: '39', name: 'Toledo', slug: 'toledo', description: 'Municipio de neblina, gran calidez y potencial energético.', history: '', image: 'https://picsum.photos/seed/tol39/800/600', culture: [], spots: [], products: [], corregimientos: ['Gibraltar', 'San Bernardo', 'Samoré'] },
  { id: '40', name: 'Villa Caro', slug: 'villa-caro', description: 'Tierra de paisajes imponentes y producción de tabaco.', history: '', image: 'https://picsum.photos/seed/vc40/800/600', culture: [], spots: [], products: [], corregimientos: [] }
];

export const activities: Activity[] = [
  {
    id: 'a1',
    title: 'Senderismo en Los Estoraques',
    category: 'aventura',
    description: 'Camina entre formaciones milenarias en un paisaje lunar único.',
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
