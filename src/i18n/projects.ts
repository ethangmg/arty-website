import type { Locale } from './translations';

export interface ProjectContent {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  location: string;
  size: string;
  type: string;
  architect: string;
  features: string[];
}

export interface Project extends ProjectContent {
  images: string[];
  blueprints: string[];
}

const projectSlugs = [
  'casa-b',
  'casa-c',
  'linda-vista',
  'casa-punta-del-rio',
  'casa-mariposario',
  'casa-esfera',
] as const;

type ProjectSlug = (typeof projectSlugs)[number];

const assets: Record<
  ProjectSlug,
  { images: string[]; blueprints: string[] }
> = {
  'casa-b': {
    images: [
      '/assets/project-images/CASA-B.png',
      '/assets/project-images/Casa B/Casa-B-interior.jpg',
      '/assets/project-images/Casa B/Casa-B-Pool.jpg',
      '/assets/project-images/Casa B/Casa-B-interior-v2.jpg',
      '/assets/project-images/Casa B/Casa-B-Exterior-v2.jpg',
      '/assets/project-images/Casa B/Casa-B-interior-v3.jpg',
    ],
    blueprints: ['/assets/project-images/Casa B/Casa-B-Blueprint.jpg'],
  },
  'casa-c': {
    images: [
      '/assets/project-images/Casa C/C_HOUSE_EXTERIOR.jpg',
      '/assets/project-images/Casa C/IMG_2096.jpg',
      '/assets/project-images/Casa C/C_HOUSE_INTERIOR-2.jpg',
      '/assets/project-images/Casa C/ALE_2835.jpg',
      '/assets/project-images/Casa C/C_HOUSE_INTERIOR.jpg',
      '/assets/project-images/Casa C/C_HOUSE_POOL.jpg',
      '/assets/project-images/Casa C/IMG_2096.jpg',
      '/assets/project-images/Casa C/Casa_C_Exterior_2.jpg',
      '/assets/project-images/Casa C/C_HOUSE-INTERIOR.jpg',
    ],
    blueprints: [
      '/assets/project-images/Casa C/casa-c-blueprint-2.png',
      '/assets/project-images/Casa C/casa-c-blueprint.png',
    ],
  },
  'linda-vista': {
    images: [
      '/assets/project-images/CASA-VISTA-LINDA.png',
      '/assets/carousel-images/C2-Image.png',
      '/assets/project-images/Casa Vista Linda/ConeCat-39.jpg',
      '/assets/carousel-images/C1-Image.png',
      '/assets/project-images/Casa Vista Linda/Linda-Vista-interior.jpg',
      '/assets/project-images/Casa Vista Linda/ConeCat-10(1).jpg',
      '/assets/project-images/Casa Vista Linda/Linda-Vista-Exterior.jpg',
      '/assets/project-images/Casa Vista Linda/ConeCat-40.jpg',
      '/assets/project-images/Casa Vista Linda/Linda-Vista-Interior-v2.jpg',
    ],
    blueprints: [
      '/assets/project-images/Casa Vista Linda/casa-lindavista-blueprint-1.png',
      '/assets/project-images/Casa Vista Linda/casa-lindavista-blueprint-2.png',
    ],
  },
  'casa-punta-del-rio': {
    images: [
      '/assets/project-images/Casa Punta del Rio/Punta-del-rio-1.jpg',
      '/assets/project-images/Casa Punta del Rio/Punta-del-rio-2.jpg',
      '/assets/project-images/Casa Punta del Rio/Punta-del-rio-9.jpg',
      '/assets/project-images/Casa Punta del Rio/Punta-del-rio-3.jpg',
      '/assets/project-images/Casa Punta del Rio/Punta-del-rio-7.jpg',
      '/assets/project-images/Casa Punta del Rio/Punta-del-rio-4.jpg',
      '/assets/project-images/Casa Punta del Rio/Punta-del-rio-5.jpg',
      '/assets/project-images/Casa Punta del Rio/Punta-del-rio-8.jpg',
      '/assets/project-images/Casa Punta del Rio/Punta-del-rio-6.jpg',
    ],
    blueprints: [
      '/assets/project-images/Casa Punta del Rio/casa-puntadelrio-blueprint.png',
    ],
  },
  'casa-mariposario': {
    images: [
      '/assets/project-images/Casa Mariposario/CASA_MORPHO.JPEG',
      '/assets/project-images/Casa Mariposario/DSC00902-2.JPEG',
      '/assets/project-images/Casa Mariposario/MARIPOSARIO-POOL.jpg',
      '/assets/project-images/Casa Mariposario/DSC01010.jpg',
      '/assets/project-images/Casa Mariposario/MARIPOSARIO-EXTERIOR.jpg',
      '/assets/project-images/Casa Mariposario/Morpho-1.jpg',
      '/assets/project-images/Casa Mariposario/DSC01067.JPEG',
      '/assets/project-images/Casa Mariposario/Morpho-2.jpg',
      '/assets/project-images/Casa Mariposario/MARIPOSARIO-INTERIOR-V2.jpg',
    ],
    blueprints: [
      '/assets/project-images/Casa Mariposario/casa-morpho-blueprint-1.png',
      '/assets/project-images/Casa Mariposario/casa-morpho-blueprint-2.png',
    ],
  },
  'casa-esfera': {
    images: [
      '/assets/project-images/CASA-ESFERA.jpg',
      '/assets/project-images/CASA-ESFERA/ESFERA-EXTERIOR.jpg',
      '/assets/project-images/CASA-ESFERA/ESFERA-INTERIOR.jpg',
      '/assets/project-images/CASA-ESFERA/ESFERA-INTERIOR-V2.jpg',
      '/assets/project-images/CASA-ESFERA/ESFERA-EXTERIOR-V2.JPG',
      '/assets/project-images/CASA-ESFERA/ESFERA-INTERIOR-V3.jpg',
    ],
    blueprints: ['/assets/project-images/CASA-ESFERA/ESFERA-BLUEPRINT.jpg'],
  },
};

const content: Record<
  ProjectSlug,
  { en: ProjectContent; es: ProjectContent }
> = {
  'casa-b': {
    en: {
      title: 'Casa B',
      subtitle:
        'Contemporary residential design featuring clean lines and sustainable materials',
      description:
        'Casa B is a cozy retreat where the architecture feels close, intimate, and natural. The polished concrete floors and walls create a solid and elegant base, while the wood details add warmth and texture, enveloping every corner with a sense of home. The heart of the house lies in the fluid relationship between the spaces: the kitchen, living room, terrace, and pool intertwine in the same environment, designed to enjoy community life without losing harmony with the surroundings.',
      year: '2025',
      location: 'Ballena, Osa',
      size: '140 m2',
      type: 'Residential',
      architect: 'Lead Architect',
      features: [
        'Open floor plan with seamless indoor-outdoor flow',
        'Energy-efficient design with solar panel integration',
        'Premium materials including natural stone and hardwood',
        'Smart home technology integration',
        'Landscaped garden with native plant species',
        'Three-car garage with electric vehicle charging',
      ],
    },
    es: {
      title: 'Casa B',
      subtitle:
        'Diseño residencial contemporáneo con líneas limpias y materiales sostenibles',
      description:
        'Casa B es un refugio acogedor donde la arquitectura se siente cercana, íntima y natural. Los pisos y muros de concreto pulido crean una base sólida y elegante, mientras los detalles en madera aportan calidez y textura. El corazón de la casa está en la relación fluida entre los espacios: cocina, sala, terraza y piscina se entrelazan en un mismo ambiente, diseñado para disfrutar la vida en comunidad sin perder la armonía con el entorno.',
      year: '2025',
      location: 'Ballena, Osa',
      size: '140 m2',
      type: 'Residencial',
      architect: 'Arquitecto líder',
      features: [
        'Planta abierta con flujo interior-exterior',
        'Diseño energéticamente eficiente con paneles solares',
        'Materiales premium incluyendo piedra natural y madera',
        'Tecnología de hogar inteligente',
        'Jardín con especies nativas',
        'Garaje para tres vehículos con carga para eléctricos',
      ],
    },
  },
  'casa-c': {
    en: {
      title: 'Casa C',
      subtitle:
        'A tropical retreat with soft curves, earthy finishes, and natural details',
      description:
        'Casa C is a cozy retreat that celebrates the tropical spirit through a contemporary lens. Its main façade is distinguished by soft, curved forms that convey movement and freshness from the very first impression. The finishes are inspired by an earthy palette, with warm and natural tones that make the space intimate and inviting. Polished concrete appears not only on floors and surfaces but also in furniture and sinks, exploring different colors that bring character and originality. Beige décor softens and balances the atmosphere, while natural details —such as wicker lamps and laurel wood in its natural tone— serve as accents that connect the architecture with the warmth of the tropical setting.',
      year: '2025',
      location: 'Ballena, Osa',
      size: '160 m2',
      type: 'Residential',
      architect: 'Lead Architect',
      features: [
        'Open floor plan with fluid indoor-outdoor connection',
        'Polished concrete floors and surfaces in varied tones',
        'Natural materials: laurel wood and wicker accents',
        'Earthy palette with beige and warm neutrals',
        'Integrated kitchen, living, and terrace spaces',
        'Curved façade and soft architectural forms',
        'Furniture and sinks in polished concrete',
      ],
    },
    es: {
      title: 'Casa C',
      subtitle:
        'Refugio tropical con formas curvas, acabados terrosos y detalles naturales',
      description:
        'Casa C es un refugio acogedor que celebra el espíritu tropical con una mirada contemporánea. Su fachada principal se distingue por formas suaves y curvas que transmiten movimiento y frescura. Los acabados se inspiran en una paleta terrosa, con tonos cálidos y naturales que hacen del espacio un lugar íntimo y acogedor. El concreto pulido aparece en pisos, superficies, muebles y lavabos, explorando distintos colores que aportan carácter y originalidad.',
      year: '2025',
      location: 'Ballena, Osa',
      size: '160 m2',
      type: 'Residencial',
      architect: 'Arquitecto líder',
      features: [
        'Planta abierta con conexión interior-exterior fluida',
        'Pisos y superficies en concreto pulido con distintos tonos',
        'Materiales naturales: madera de laurel y detalles en wicker',
        'Paleta terrosa con beige y neutros cálidos',
        'Espacios integrados: cocina, sala y terraza',
        'Fachada curva y formas arquitectónicas suaves',
        'Muebles y lavabos en concreto pulido',
      ],
    },
  },
  'linda-vista': {
    en: {
      title: 'Casa Vista Linda',
      subtitle:
        'Casa Vista Linda, located in Chontales de Osa, has been architecturally designed to maximize the property\'s breathtaking views.',
      description:
        'Casa Vista Linda, located in Chontales de Osa, has been architecturally designed to maximize the property\'s stunning views. The common areas, such as the kitchen and living room, are integrated with the terrace and pool, and each of the bedrooms offers ocean views. As the name suggests, most of the spaces provide access to a "Vista Linda" The standout finishes include polished concrete to accentuate the main walls, while the rest of the house features neutral colors like white with black details. For the selection of interior details, a color palette ranging from gray to white has been chosen, with accent materials such as wood for some furniture, and wicker and bamboo for lamps and certain decorative elements. Undoubtedly, the residents of this house will experience a unique connection with nature from every one of its spaces.',
      year: '2024',
      location: 'Chontales, Osa',
      size: '8,500 sq ft',
      type: 'Residential',
      architect: 'Lead Architect',
      features: [
        'Grand entrance with double-height foyer',
        'Master suite with private balcony and ocean views',
        'Professional-grade kitchen with custom cabinetry',
        'Wine cellar with climate control system',
        'Home theater with surround sound',
        'Infinity pool with integrated spa',
        'Guest house with separate entrance',
      ],
    },
    es: {
      title: 'Casa Vista Linda',
      subtitle:
        'Casa Vista Linda, en Chontales de Osa, ha sido diseñada para maximizar las vistas del property.',
      description:
        'Casa Vista Linda, ubicada en Chontales de Osa, ha sido diseñada arquitectónicamente para maximizar las impresionantes vistas de la propiedad. Las áreas comunes, como la cocina y la sala, se integran con la terraza y la piscina, y cada habitación ofrece vistas al océano. Los acabados destacados incluyen concreto pulido en los muros principales, mientras el resto de la casa presenta colores neutros como blanco con detalles negros.',
      year: '2024',
      location: 'Chontales, Osa',
      size: '8,500 sq ft',
      type: 'Residencial',
      architect: 'Arquitecto líder',
      features: [
        'Entrada con doble altura',
        'Suite principal con balcón y vistas al mar',
        'Cocina profesional con muebles a medida',
        'Cava con control de clima',
        'Sala de cine',
        'Piscina infinita con spa',
        'Casa de invitados con entrada independiente',
      ],
    },
  },
  'casa-punta-del-rio': {
    en: {
      title: 'Casa Punta del Rio',
      subtitle:
        'This project, located in Marina Vista, Dominicalito, was designed to blend architecture with nature in a single harmonious language.',
      description:
        'This project, located in Marina Vista, Dominicalito, was conceived to merge architecture and nature into a single harmonious language. With views that embrace both the ocean and the mountains, the home becomes a sensory retreat where the serenity of the sea meets the majesty of the tropical forest. Inspired by the Jungle Modern Design concept, we developed an architectural proposal that breathes freedom and natural elegance, complemented by thoughtfully designed furniture and a moodboard of fresh, light, and organic finishes that elevate the aesthetic and emotional experience of the space.',
      year: '2025',
      location: 'Dominicalito',
      size: '240 m2',
      type: 'Residential',
      architect: 'Lead Architect',
      features: [
        'Open floor plan with seamless indoor-outdoor flow',
        'Energy-efficient design with solar panel integration',
        'Premium materials including natural stone and hardwood',
        'Smart home technology integration',
        'Landscaped garden with native plant species',
        'Three-car garage with electric vehicle charging',
      ],
    },
    es: {
      title: 'Casa Punta del Rio',
      subtitle:
        'Este proyecto, en Marina Vista, Dominicalito, fue diseñado para fusionar arquitectura y naturaleza en un lenguaje armónico.',
      description:
        'Este proyecto, ubicado en Marina Vista, Dominicalito, fue concebido para fusionar la arquitectura y la naturaleza en un mismo lenguaje armónico. Con vistas que abrazan el océano y la montaña, la casa se convierte en un refugio sensorial donde la serenidad del mar se encuentra con la majestuosidad del bosque tropical. Inspirados en el concepto Jungle Modern Design, desarrollamos una propuesta arquitectónica que transmite libertad y elegancia natural.',
      year: '2025',
      location: 'Dominicalito',
      size: '240 m2',
      type: 'Residencial',
      architect: 'Arquitecto líder',
      features: [
        'Planta abierta con flujo interior-exterior',
        'Diseño eficiente con paneles solares',
        'Materiales premium: piedra natural y madera',
        'Tecnología de hogar inteligente',
        'Jardín con especies nativas',
        'Garaje con carga para vehículos eléctricos',
      ],
    },
  },
  'casa-mariposario': {
    en: {
      title: 'Casa Morpho',
      subtitle:
        'Designed to live in harmony with nature, this house opens up to its surroundings with interconnected spaces.',
      description:
        'Mariposario Project is a residential complex of three homes conceived from the relationship between architecture, nature, and the local species of Uvita. Each house interprets this connection through its own identity, understanding the surroundings as a living system with which to engage in dialogue. Morpho, the second house in the project, draws inspiration from the Morpho butterfly through a spatial rather than chromatic interpretation. The design explores movement, shifts in perception according to light, and the contrast between solid and void, creating an architecture that transforms with the journey through it and the passage of time. Spaces are revealed gradually, reinforcing a sensory experience in which architecture does not impose itself, but instead integrates with the landscape.',
      year: '2025',
      location: 'Bahia Ballena',
      size: '150 m2',
      type: 'Residential',
      architect: 'Lead Architect',
      features: [
        'Open spaces with seamless integration to the landscape',
        'Architecture inspired by the Morpho butterfly (spatial interpretation)',
        'Contrast between solid and void; perception shifts with light',
        'Natural finishes and connection to local species of Uvita',
        'Spaces revealed gradually along the journey through the house',
        'Terrace and outdoor areas in dialogue with nature',
        'Residential complex of three homes in harmony with the setting',
      ],
    },
    es: {
      title: 'Casa Morpho',
      subtitle:
        'Diseñada para vivir en armonía con la naturaleza, esta casa se abre al entorno con espacios interconectados.',
      description:
        'El proyecto Mariposario es un conjunto residencial de tres casas concebido desde la relación entre arquitectura, naturaleza y las especies locales de Uvita. Cada casa interpreta esta conexión con su propia identidad. Morpho, la segunda casa del proyecto, se inspira en la mariposa Morpho mediante una interpretación espacial. El diseño explora el movimiento, los cambios de percepción según la luz y el contraste entre lleno y vacío, creando una arquitectura que se transforma con el recorrido y el paso del tiempo.',
      year: '2025',
      location: 'Bahía Ballena',
      size: '150 m2',
      type: 'Residencial',
      architect: 'Arquitecto líder',
      features: [
        'Espacios abiertos con integración al paisaje',
        'Arquitectura inspirada en la mariposa Morpho (interpretación espacial)',
        'Contraste entre lleno y vacío; la percepción cambia con la luz',
        'Acabados naturales y conexión con las especies locales de Uvita',
        'Espacios que se revelan gradualmente en el recorrido',
        'Terraza y áreas exteriores en diálogo con la naturaleza',
        'Conjunto residencial de tres casas en armonía con el entorno',
      ],
    },
  },
  'casa-esfera': {
    en: {
      title: 'Casa Esfera',
      subtitle:
        'Casa Esfera is a contemporary retreat that combines modern lines with a fresh and bright atmosphere.',
      description:
        'Casa Esfera is a contemporary retreat that blends modern lines with a fresh, luminous atmosphere. Its concept revolves around a black-and-white palette that enhances spatial clarity and creates an elegant contrast, highlighting every architectural detail. Located in a privileged setting, the residence opens toward the horizon with panoramic ocean views, allowing natural light to flood each space and reinforce the sense of openness and connection with nature. The design is complemented by teak wood accents, adding warmth and texture to the composition. These natural elements soften the restraint of the monochrome scheme, achieving a perfect balance between modernity and comfort. Casa Esfera is designed for those seeking a sophisticated, airy, and light-filled lifestyle — where architecture and landscape merge in perfect harmony.',
      year: '2022',
      location: 'Chontales, Osa',
      size: '1,500 sq ft',
      type: 'Residential',
      architect: 'Lead Architect',
      features: [
        'Grand entrance with double-height foyer',
        'Master suite with private balcony and ocean views',
        'Professional-grade kitchen with custom cabinetry',
        'Wine cellar with climate control system',
        'Home theater with surround sound',
        'Infinity pool with integrated spa',
        'Guest house with separate entrance',
      ],
    },
    es: {
      title: 'Casa Esfera',
      subtitle:
        'Casa Esfera es un refugio contemporáneo que combina líneas modernas con una atmósfera fresca y luminosa.',
      description:
        'Casa Esfera es un refugio contemporáneo que fusiona líneas modernas con una atmósfera fresca y luminosa. Su concepto gira en torno a una paleta en blanco y negro que realza la claridad espacial y crea un contraste elegante. Ubicada en un entorno privilegiado, la residencia se abre al horizonte con vistas panorámicas al océano. El diseño se complementa con acentos en madera de teca, aportando calidez y textura. Casa Esfera está diseñada para quienes buscan un estilo de vida sofisticado, aireado y lleno de luz.',
      year: '2022',
      location: 'Chontales, Osa',
      size: '1,500 sq ft',
      type: 'Residencial',
      architect: 'Arquitecto líder',
      features: [
        'Entrada con doble altura',
        'Suite principal con balcón y vistas al mar',
        'Cocina profesional',
        'Cava con control de clima',
        'Sala de cine',
        'Piscina infinita con spa',
        'Casa de invitados con entrada independiente',
      ],
    },
  },
};

export function getProjectSlugs(): readonly string[] {
  return projectSlugs;
}

export function getProject(
  slug: string,
  locale: Locale
): Project | undefined {
  if (!projectSlugs.includes(slug as ProjectSlug)) return undefined;
  const key = slug as ProjectSlug;
  const asset = assets[key];
  const locContent = content[key]?.[locale] ?? content[key]?.en;
  if (!asset || !locContent) return undefined;
  return {
    ...locContent,
    images: asset.images,
    blueprints: asset.blueprints,
  };
}

export interface ProjectListItem {
  slug: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export function getProjectsList(locale: Locale): ProjectListItem[] {
  const fallback = locale === 'es' ? 'en' : 'en';
  return projectSlugs.map((slug) => {
    const proj = getProject(slug, locale) ?? getProject(slug, fallback as Locale);
    if (!proj) throw new Error(`Missing project: ${slug}`);
    return {
      slug,
      image: proj.images[0]!,
      alt: proj.title,
      title: proj.title,
      description: proj.subtitle,
    };
  });
}
