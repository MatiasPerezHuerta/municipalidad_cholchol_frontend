export const services = [
  {
    id: 'tramites',
    title: 'Tramites municipales',
    category: 'Tramites',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
    description:
      'Orientacion para certificados, solicitudes, permisos y atencion de requerimientos ciudadanos.'
  },
  {
    id: 'pagos',
    title: 'Pagos y patentes',
    category: 'Tramites',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    description:
      'Acceso rapido a informacion de pagos, permisos de circulacion, patentes y convenios.'
  },
  {
    id: 'dideco',
    title: 'DIDECO y beneficios',
    category: 'Comunidad',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    description:
      'Informacion sobre programas sociales, organizaciones comunitarias y apoyo a familias.'
  },
  {
    id: 'seguridad',
    title: 'Seguridad publica',
    category: 'Comunidad',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description:
      'Canales de orientacion ciudadana, coordinacion preventiva y reportes de situaciones comunales.'
  },
  {
    id: 'medioambiente',
    title: 'Medio ambiente',
    category: 'Territorio',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
    description:
      'Iniciativas de reciclaje, cuidado de espacios publicos y educacion ambiental.'
  },
  {
    id: 'transparencia',
    title: 'Transparencia municipal',
    category: 'Institucional',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    description:
      'Acceso a informacion publica, normativa, licitaciones y gestion institucional.'
  }
];

export const news = [
  {
    title: 'Nuevo acceso ciudadano para consultas municipales',
    tag: 'Atencion',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    alt: 'Edificio institucional usado como imagen referencial de atencion municipal',
    text:
      'Se propone una estructura de acceso simple para que la comunidad encuentre informacion relevante en menos clics.'
  },
  {
    title: 'Actividades comunitarias y participacion vecinal',
    tag: 'Comunidad',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    alt: 'Grupo de personas en una actividad comunitaria al aire libre',
    text:
      'La seccion de noticias organiza comunicados, avisos y actividades con tarjetas legibles y adaptables a moviles.'
  },
  {
    title: 'Mejoras digitales para dispositivos moviles',
    tag: 'Digital',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Persona utilizando un computador portatil como referencia de servicios digitales',
    text:
      'El rediseno considera botones grandes, navegacion por teclado y validaciones visibles para reducir errores.'
  }
];

export const about = {
  title: 'Una portada municipal clara, moderna y cercana',
  description:
    'La propuesta reutiliza el trabajo anterior y lo migra a Next.js con componentes React, consumo de endpoints internos, accesibilidad y validaciones de formulario.',
  highlights: [
    'Informacion municipal organizada por prioridad ciudadana.',
    'Componentes reutilizables para servicios, noticias, FAQ y contacto.',
    'Contenido desacoplado para simular administracion tipo CMS.'
  ]
};

export const testimonials = [
  {
    name: 'Vecina de Cholchol',
    role: 'Usuaria de tramites',
    quote:
      'La informacion esta mas ordenada y es facil encontrar los servicios desde el telefono.'
  },
  {
    name: 'Equipo municipal',
    role: 'Atencion ciudadana',
    quote:
      'Las tarjetas y filtros ayudan a orientar mejor las consultas frecuentes.'
  },
  {
    name: 'Estudiante evaluador',
    role: 'Revision academica',
    quote:
      'La migracion a framework deja componentes claros, reutilizables y faciles de mantener.'
  }
];

export const faqs = [
  {
    question: 'Que cambia respecto a la evaluacion anterior?',
    answer:
      'Se mantiene el caso Cholchol, pero ahora la interfaz esta construida con Next.js y React, usando componentes reutilizables y endpoints internos.'
  },
  {
    question: 'De donde vienen los datos dinamicos?',
    answer:
      'La landing consume el endpoint interno /api/site-content, que centraliza servicios, noticias, preguntas frecuentes y contenido institucional.'
  },
  {
    question: 'Como se protege el formulario?',
    answer:
      'El formulario valida campos en cliente, vuelve a validar en servidor mediante /api/contact y agrega un campo honeypot contra robots.'
  }
];

export const summaryItems = [
  { value: '6', label: 'servicios renderizados desde API' },
  { value: '4', label: 'componentes principales reutilizables' },
  { value: '100%', label: 'diseno responsive y accesible' }
];

export function getSiteContent() {
  return {
    about,
    services,
    news,
    testimonials,
    faqs,
    summaryItems
  };
}
