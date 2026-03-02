import { HowToOrder } from '@/shared/ui/components/home'
import { AboutUsHero, AboutUsStory, AboutUsValues } from '@/shared/ui/components/about-us'
import { FAQ } from '@/shared/ui/components/faq/FAQ'
import { SimpleCta } from '@/shared/ui/components/call-to-action/SimpleCta'

export default function AboutUsPage() {
  return (
    <main>
      <AboutUsHero />
      <AboutUsStory />
      <HowToOrder />
      <AboutUsValues />

      <SimpleCta />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-2 text-sm text-ink/70 md:text-base">
              Resolvemos dudas comunes sobre pedidos, pagos y entregas.
            </p>
          </div>

          <div className="mt-6">
            <FAQ />
          </div>
        </div>
      </section>
    </main>
  )
}