'use client'
import { useState } from 'react'
import { FileText, AlertCircle } from 'lucide-react'

export default function LibroReclamacionesPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    orderCode: '',
    purchaseDate: '',
    type: '',
    description: '',
    desiredResolution: '',
    evidence: null as File | null,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const { files = [] } = e.target

    if (!files) return

    const file = files[0] || null
    if (file) setForm(prev => ({ ...prev, evidence: file }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // lógica de envío en stand-by
    console.log('Reclamo enviado (stand-by)', form)
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink/80">
            <AlertCircle size={14} strokeWidth={1.8} className="text-primary" />
            Libro de Reclamaciones
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Presenta tu reclamo
          </h1>
          <p className="mt-3 text-sm text-ink/70 md:text-base max-w-2xl">
            Si tu compra o experiencia con uno de nuestros productos no fue satisfactoria,
            completa este formulario y nos pondremos en contacto para atender tu reclamo.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white">
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl px-4 py-10 space-y-8">
          {/* Datos personales */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink">Nombre completo *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-black/20 px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink">Teléfono / WhatsApp *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-black/20 px-3 py-2 text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-ink">Correo electrónico</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-black/20 px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Compra y producto */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink">Producto o servicio</label>
              <input
                name="product"
                value={form.product}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-black/20 px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink">Código de pedido</label>
              <input
                name="orderCode"
                value={form.orderCode}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-black/20 px-3 py-2 text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-ink">Fecha de compra o incidencia</label>
              <input
                name="purchaseDate"
                type="date"
                value={form.purchaseDate}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-black/20 px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Detalle del reclamo */}
          <div>
            <label className="block text-sm font-medium text-ink">Tipo de reclamo</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-black/20 px-3 py-2 text-sm"
            >
              <option value="">Selecciona…</option>
              <option value="defectuoso">Producto defectuoso</option>
              <option value="no-recibido">Producto no recibido</option>
              <option value="incorrecto">Producto diferente a lo ofertado</option>
              <option value="entrega">Problemas de entrega</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink">Describe tu reclamo *</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-black/20 px-3 py-2 text-sm"
              rows={4}
            />
          </div>

          {/* Resultado esperado */}
          <div>
            <label className="block text-sm font-medium text-ink">¿Qué resultado esperas?</label>
            <textarea
              name="desiredResolution"
              value={form.desiredResolution}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-black/20 px-3 py-2 text-sm"
              rows={2}
            />
          </div>

          {/* Evidencia (opcional) */}
          <div>
            <label className="block text-sm font-medium text-ink">Evidencia (foto/archivo)</label>
            <input
              name="evidence"
              type="file"
              onChange={handleFile}
              className="mt-1 block text-sm"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            <FileText size={18} />
            Registrar reclamo
          </button>

          {/* Nota legal */}
          <p className="text-xs text-ink/60">
            * Los datos que proporciones serán usados exclusivamente para atender tu reclamo,
            como lo establece la normativa de protección al consumidor en Perú.
          </p>
        </form>
      </section>
    </main>
  )
}