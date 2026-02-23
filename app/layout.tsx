import type { Metadata } from 'next'
import { Header } from '@/shared/ui/components/header/Header'
import { Footer } from '@/shared/ui/components/footer/Footer'
import { SEO_METADATA } from '@/shared/lib/constants'
import './index.css'

export const metadata: Metadata = SEO_METADATA

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className='scroll-smooth'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Store',
            'name': 'Arrova Store',
            'url': 'https://arrovastore.com',
            'logo': 'https://arrovastore.com/brand/logo.png',
            'description': 'Regalos personalizados hechos a mano en Lima.',
            'areaServed': {
              '@type': 'Place',
              'name': 'Lima, Perú'
            },
            'sameAs': [
              'https://instagram.com/TUUSUARIO',
              'https://facebook.com/TUUSUARIO'
            ]
          })
        }}
      />

      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
