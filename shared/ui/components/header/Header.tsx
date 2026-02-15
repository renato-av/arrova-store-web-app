import Link from 'next/link'
import Image from 'next/image'
import { nav } from '@/shared/lib/constants'
import { whatsappHref } from '@/shared/lib/utils'
import MobileNav from './MobileNav'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-16 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/brand/logo-horizontal-sin-fondo.png"
              alt="ARROVASTORE"
              width={150}
              height={45}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink/80 hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand hidden md:inline-flex"
          >
            WhatsApp
          </a>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}
