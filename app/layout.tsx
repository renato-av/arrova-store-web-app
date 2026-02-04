import type { Metadata } from 'next'
import { Header } from '@/shared/ui/components/header/Header'
import { SEO_METADATA } from '@/shared/lib/constants/seo'
import './index.css'
import { Footer } from '@/shared/ui/components/footer/Footer'

export const metadata: Metadata = SEO_METADATA

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
