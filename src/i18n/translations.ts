export type Locale = 'en' | 'es';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact Us',
    },
    hero: {
      viewProjects: 'View Projects',
      getAQuote: 'Get a quote',
    },
    about: {
      title: 'About Us',
      subtitle: 'Passionate about creating exceptional architectural experiences',
      heading: 'Meet Our Team',
      paragraph1:
        'We are a creative studio where art and architecture intertwine to bring unique, functional, and meaningful spaces to life. At ARTY, we believe in the power of design to transform realities, excite, and connect.',
      paragraph2:
        'We specialize in comprehensive projects that range from concept to execution. We approach each idea with aesthetic sensitivity, environmental awareness, and a deep respect for the context and the people who inhabit it.',
      stats: {
        projectsCompleted: 'Projects Completed',
        yearsExperience: 'Years Experience',
        clientSatisfaction: 'Returning clients',
      },
      imageAlt: 'Professional Architect',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive architectural solutions for every need',
      items: [
        {
          alt: 'Residential Design',
          title: 'Residential Design',
          description:
            'We design functional, aesthetic, and sustainable spaces, adapted to the environment and the needs of each client.',
        },
        {
          alt: 'Commercial architecture.',
          title: 'Commercial architecture.',
          description:
            'We develop architectural solutions for offices, commercial premises, coworking spaces, and start-ups, optimizing the functionality of the space and projecting the identity of each brand.',
        },
        {
          alt: 'Building permits',
          title: 'Building permits',
          description:
            'We take care of the entire process of obtaining permits from institutions such as the CFIA, municipalities, and the INS.',
        },
        {
          alt: 'Personalized consulting services',
          title: 'Personalized consulting services',
          description:
            'We offer consulting sessions for those seeking guidance on design, space distribution, finishes, choice of materials, or budget optimization.',
        },
        {
          alt: 'Art and decoration',
          title: 'Art and decoration',
          description:
            'We integrate art into spaces through decorative elements, furniture, murals, and pieces selected with aesthetic and emotional intent.',
        },
        {
          alt: 'Project management and consulting',
          title: 'Project management and consulting',
          description:
            'We accompany the construction process from planning to execution. We supervise costs, schedules, suppliers, and quality of work.',
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Explore our portfolio of exceptional architectural achievements',
      portfolioLink: 'Our complete digital portfolio',
    },
    contact: {
      title: 'Contact Us',
      subtitle: "Ready to start your next architectural project? Let's discuss your vision",
      getInTouch: 'Get In Touch',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      hours: 'Hours',
      hoursValue: 'Monday - Friday: 8:00 AM - 5:00 PM',
      addressValue: 'Bahia Ballena, Uvita , Osa',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your Email',
      placeholderSubject: 'Subject',
      placeholderMessage: 'Your Message',
      sendMessage: 'Send Message',
      messageSentSuccess: 'Message sent successfully.',
      messageSentError: 'Something went wrong. Please try again.',
    },
    layout: {
      title: 'Architect Portfolio - Professional Architecture Services',
      description: 'Professional Architecture Portfolio',
      footer: '© 2026 ARTY Architecture. All rights reserved.',
      poweredBy: 'Developed by Hermosa Software',
    },
    projectDetail: {
      home: 'Home',
      projects: 'Projects',
      year: 'Year:',
      location: 'Location:',
      size: 'Size:',
      type: 'Type:',
      architecturalPlans: 'Architectural Plans',
      projectOverview: 'Project Overview',
      projectGallery: 'Project Gallery',
      keyFeatures: 'Key Features',
      backToProjects: '← Back to All Projects',
      blueprintAlt: 'Blueprint',
    },
    common: {
      viewDetails: 'View Details →',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      viewProjects: 'Ver Proyectos',
      getAQuote: 'Solicitar cotización',
    },
    about: {
      title: 'Nosotros',
      subtitle: 'Apasionados por crear experiencias arquitectónicas excepcionales',
      heading: 'Conoce a nuestro equipo',
      paragraph1:
        'Somos un estudio creativo donde el arte y la arquitectura se entrelazan para dar vida a espacios únicos, funcionales y significativos. En ARTY creemos en el poder del diseño para transformar realidades, emocionar y conectar.',
      paragraph2:
        'Nos especializamos en proyectos integrales que van desde el concepto hasta la ejecución. Abordamos cada idea con sensibilidad estética, conciencia ambiental y un profundo respeto por el contexto y las personas que lo habitan.',
      stats: {
        projectsCompleted: 'Proyectos Completados',
        yearsExperience: 'Años de Experiencia',
        clientSatisfaction: 'Clientes Recurrentes',
      },
      imageAlt: 'Arquitecto profesional',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones arquitectónicas integrales para cada necesidad',
      items: [
        {
          alt: 'Diseño residencial',
          title: 'Diseño residencial',
          description:
            'Diseñamos espacios funcionales, estéticos y sostenibles, adaptados al entorno y a las necesidades de cada cliente.',
        },
        {
          alt: 'Arquitectura Comercial',
          title: 'Arquitectura Comercial',
          description:
            'Desarrollamos soluciones arquitectónicas para oficinas, locales comerciales, coworkings y startups, optimizando la funcionalidad del espacio y proyectando la identidad de cada marca.',
        },
        {
          alt: 'Permisos de construcción',
          title: 'Permisos de construcción',
          description:
            'Nos encargamos de todo el proceso de obtención de permisos ante instituciones como el CFIA, municipalidades e INS.',
        },
        {
          alt: 'Consultoría personalizada',
          title: 'Consultoría personalizada',
          description:
            'Ofrecemos sesiones de consultoría para quienes buscan orientación en diseño, distribución de espacios, acabados, elección de materiales u optimización de presupuesto.',
        },
        {
          alt: 'Arte y decoración',
          title: 'Arte y decoración',
          description:
            'Integramos el arte en los espacios mediante elementos decorativos, muebles, murales y piezas seleccionadas con intención estética y emocional.',
        },
        {
          alt: 'Gestión y consultoría de proyectos',
          title: 'Gestión y consultoría de proyectos',
          description:
            'Acompañamos el proceso constructivo desde la planificación hasta la ejecución. Supervisamos costos, cronogramas, proveedores y calidad de obra.',
        },
      ],
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Explora nuestro portafolio de logros arquitectónicos excepcionales',
      portfolioLink: 'Nuestro portafolio digital completo',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Listo para iniciar tu próximo proyecto arquitectónico? Hablemos de tu visión',
      getInTouch: 'Escríbenos',
      email: 'Correo',
      phone: 'Teléfono',
      address: 'Dirección',
      hours: 'Horario',
      hoursValue: 'Lunes - Viernes: 8:00 AM - 5:00 PM',
      addressValue: 'Bahía Ballena, Uvita, Osa',
      placeholderName: 'Tu nombre',
      placeholderEmail: 'Tu correo',
      placeholderSubject: 'Asunto',
      placeholderMessage: 'Tu mensaje',
      sendMessage: 'Enviar mensaje',
      messageSentSuccess: 'Mensaje enviado correctamente.',
      messageSentError: 'Algo salió mal. Por favor intenta de nuevo.',
    },
    layout: {
      title: 'Portafolio de Arquitectura - Servicios Profesionales',
      description: 'Portafolio profesional de arquitectura',
      footer: '© 2026 ARTY Architecture. Todos los derechos reservados.',
      poweredBy: 'Developed by Hermosa Software',
    },
    projectDetail: {
      home: 'Inicio',
      projects: 'Proyectos',
      year: 'Año:',
      location: 'Ubicación:',
      size: 'Tamaño:',
      type: 'Tipo:',
      architecturalPlans: 'Planos arquitectónicos',
      projectOverview: 'Resumen del proyecto',
      projectGallery: 'Galería del proyecto',
      keyFeatures: 'Características principales',
      backToProjects: '← Volver a todos los proyectos',
      blueprintAlt: 'Plano',
    },
    common: {
      viewDetails: 'Ver detalles →',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en;
}
