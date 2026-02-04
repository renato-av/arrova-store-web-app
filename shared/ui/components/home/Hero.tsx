import Link from 'next/link'
import Image from 'next/image'
import { whatsappHref } from '@/shared/lib/utils'

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/80">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Hecho a mano
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Regalos hechos a mano y{' '}
              <span className="text-primary">personalizados</span> en Lima
            </h1>

            <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
              Creamos piezas artesanales con valor emocional y accesorios en stock.
              Coordinamos contigo por WhatsApp los detalles, tiempos de producción y
              entrega para que todo salga perfecto.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand"
              >
                Pedir por WhatsApp
              </a>

              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-black/5"
              >
                Ver catálogo
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-ink/70">
              <span className="rounded-full bg-black/5 px-3 py-1">
                Personalizados: adelanto 50%
              </span>
              <span className="rounded-full bg-black/5 px-3 py-1">
                Piezas hechas a mano con mucho cariño
              </span>
              <span className="rounded-full bg-black/5 px-3 py-1">
                Entregas coordinadas (Lima)
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-4xl bg-brand-gradient opacity-20 blur-2xl" />
            <div className="relative rounded-4xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-center">
                <Image
                  src="/brand/logo-completo.png"
                  alt="ARROVASTORE"
                  width={520}
                  height={520}
                  className="h-auto w-full max-w-sm"
                  priority
                />
              </div>

              <p className="mt-4 text-center text-sm text-ink/70">
                Regalos con intención y trato cercano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
