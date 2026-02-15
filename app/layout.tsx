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
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
