export const SEO_METADATA = {
  metadataBase: new URL('https://arrovastore.com'),

  title: {
    default: 'Arrova Store | Regalos personalizados hechos a mano en Lima',
    template: '%s | Arrova Store',
  },

  description:
    'Arrova Store crea regalos personalizados y hechos a mano en Lima. Amigurumis, tejidos artesanales y detalles con valor emocional. Atención directa por WhatsApp y entregas coordinadas.',

  keywords: [
    'Arrova Store',
    'regalos personalizados en Lima',
    'regalos hechos a mano en Lima',
    'amigurumi personalizado Lima',
    'tejidos artesanales Perú',
    'regalos artesanales Lima',
    'detalles personalizados Lima',
  ],

  alternates: {
    canonical: 'https://arrovastore.com',
  },

  icons: {
    icon: '/brand/logo-sin-fondo.png',
  },

  authors: [{ name: 'Arrova Store' }],
  creator: 'Arrova Store',

  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://arrovastore.com',
    siteName: 'Arrova Store',
    title: 'Arrova Store | Regalos personalizados hechos a mano en Lima',
    description:
      'Regalos personalizados hechos a mano en Lima. Amigurumis y tejidos artesanales con atención directa y coordinación por WhatsApp.',
    images: [
      {
        url: 'https://arrovastore.com/brand/logo.png',
        width: 1200,
        height: 630,
        alt: 'Arrova Store - Regalos personalizados en Lima',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Arrova Store | Regalos personalizados en Lima',
    description:
      'Amigurumis y regalos hechos a mano con atención directa y entregas coordinadas en Lima.',
    images: ['https://arrovastore.com/brand/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
}