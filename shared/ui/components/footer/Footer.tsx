import Link from 'next/link'
import Image from 'next/image'
import { Instagram, MessageCircle, Music2 } from 'lucide-react'
import { whatsappHref } from '@/shared/lib/utils'

type Props = {
  instagramUrl?: string
  tiktokUrl?: string
}

export function Footer({
  instagramUrl = 'https://www.instagram.com/arrova.store',
  tiktokUrl = 'https://www.tiktok.com/@arrova.store',
}: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className='order-2'>
            <div className="flex items-center gap-3">
              <Image
                src="/brand/logo.png"
                alt="ARROVASTORE"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-semibold tracking-tight text-ink">
                  ARROVASTORE
                </p>
                <p className="text-xs text-ink/70">
                  Regalos hechos a mano y personalizados
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white hover:opacity-90"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink hover:bg-black/5"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href={tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink hover:bg-black/5"
                aria-label="TikTok"
              >
                <Music2 size={18} />
              </a>
            </div>
          </div>

          <nav>
            <p className="text-sm font-semibold text-ink">
              Navegación
            </p>

            <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm text-ink/70">
              <li><Link href="/" className="hover:text-ink">Inicio</Link></li>
              <li><Link href="/catalogo" className="hover:text-ink">Catálogo</Link></li>
              <li><Link href="/faq" className="hover:text-ink">FAQ</Link></li>
              <li><Link href="/terminos" className="hover:text-ink">Términos</Link></li>
              <li><Link href="/contacto" className="hover:text-ink">Contacto</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-4 text-xs text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} ARROVASTORE. Todos los derechos reservados.</p>

          <div className="flex gap-4">
            <Link href="/terminos" className="hover:text-ink">Términos</Link>
            <Link href="/faq" className="hover:text-ink">FAQ</Link>
            <a href={whatsappHref()} target="_blank" rel="noreferrer" className="hover:text-ink">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
