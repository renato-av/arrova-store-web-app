export const SEO_METADATA = {
  metadataBase: new URL('https://www.arrovastore.com'),
  title: {
    default: 'Arrova Store | Regalos hechos a mano y personalizados',
    template: '%s | Arrova Store',
  },
  description:
    'Regalos y accesorios hechos a mano y personalizados. Producción a pedido, atención directa y entregas coordinadas en Lima.',
  keywords: [
    'regalos personalizados',
    'regalos hechos a mano',
    'amigurumi',
    'tejidos artesanales',
    'regalos en Lima',
    'accesorios artesanales',
    'arrova store',
  ],
  icons: {
    icon: '/brand/logo-sin-fondo.png'
  },
  authors: [{ name: 'Renato Arredondo' }],
  creator: 'Arrova Store',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://arrovastore.com',
    siteName: 'Arrova Store',
    title: 'Arrova Store | Regalos hechos a mano y personalizados',
    description:
      'Regalos y accesorios artesanales hechos a pedido. Cada pieza se trabaja con cuidado, procesos claros y atención personalizada.',
    images: [
      {
        url: '/brand/logo.png',
        width: 512,
        height: 512,
        alt: 'Arrova Store - regalos hechos a mano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrova Store | Regalos hechos a mano y personalizados',
    description:
      'Regalos artesanales y personalizados con atención directa. Producción limitada y entregas coordinadas.',
    images: ['/brand/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
