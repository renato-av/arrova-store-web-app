import Image from 'next/image'

export function AboutUsStory() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Nuestra historia
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
              Arrova Store nace del gusto por regalar algo que no se siente genérico.
              Creemos que un detalle bien hecho puede decir “te conozco” sin necesidad de muchas palabras.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
              Por eso trabajamos con un proceso claro: tomamos una referencia, definimos alcance,
              confirmamos tiempos y coordinamos la entrega. Así cuidamos tu expectativa y nuestro trabajo.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-ink/70">
              <span className="rounded-full bg-black/5 px-3 py-1">Hecho a pedido</span>
              <span className="rounded-full bg-black/5 px-3 py-1">Detalles personalizables</span>
              <span className="rounded-full bg-black/5 px-3 py-1">Trato cercano</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-4xl bg-brand-gradient opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/5">
              <div className="relative aspect-4/3">
                <Image
                  src="/about/process-1.jpg"
                  alt="Proceso artesanal de Arrova Store"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <p className="mt-3 text-xs text-ink/50">
              Sugerencia de imagen: manos tejiendo / proceso artesanal (taller).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}