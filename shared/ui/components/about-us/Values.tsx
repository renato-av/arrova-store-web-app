import Image from 'next/image'

const values = [
  'Expectativas realistas',
  'Detalles bien terminados',
  'Comunicación clara',
  'Trato cercano',
  'Calidad antes que volumen',
]

export function AboutUsValues() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/5">

            <div className="relative aspect-4/3">
              <Image
                src="/about/packaging-1.jpg"
                alt="Empaque y entrega de Arrova Store"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Lo que cuidamos en cada pedido
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {values.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/70"
                >
                  {v}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink/70 md:text-base">
              Queremos que el resultado final se sienta especial. Por eso preferimos coordinar bien
              desde el inicio y trabajar con cuidado cada detalle.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}