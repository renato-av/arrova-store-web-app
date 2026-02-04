import Link from 'next/link'
import { nav } from '@/shared/lib/constants/nav'
import { Menu } from 'lucide-react'
import { whatsappHref } from '@/shared/lib/utils'

export default function MobileNav() {
  return (
    <details className="md:hidden relative">
      <summary
        className="list-none inline-flex items-center justify-center rounded-full p-2 border border-black/10 text-ink hover:bg-black/5 cursor-pointer"
        aria-label="Abrir menú"
      >
        <Menu />
      </summary>

      <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-black/10 bg-white shadow-lg p-2">
        <div className="flex flex-col">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-xl text-sm text-ink/80 hover:text-ink hover:bg-black/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="my-2 h-px bg-black/5" />
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-xl text-sm font-medium text-white bg-primary hover:opacity-90 text-center"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </details>
  )
}