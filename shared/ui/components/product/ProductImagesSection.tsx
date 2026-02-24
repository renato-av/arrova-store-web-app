'use client'

import Image from 'next/image'
import { Product } from '@/shared/lib/catalog/products'
import { useMemo, useRef, useState } from 'react'
import { cn } from '@/shared/lib/utils'

function getCoverIndex(images: Product['images']) {
  const idx = images.findIndex(i => i.isCover)
  return idx >= 0 ? idx : 0
}

export default function ProductImagesSection({ images }: { images: Product['images'] }) {
  const initialIndex = useMemo(() => getCoverIndex(images), [images])
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  const [isHovering, setIsHovering] = useState(false)
  const [lens, setLens] = useState({ x: 0, y: 0 })
  const [containerWidth, setContainerWidth] = useState(1)

  const containerRef = useRef<HTMLDivElement>(null)

  const activeImage = images[activeIndex] ?? images[0]

  const LENS_SIZE = 260
  const ZOOM = 2.8

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const half = LENS_SIZE / 2
    const clampedX = Math.max(half, Math.min(x, rect.width - half))
    const clampedY = Math.max(half, Math.min(y, rect.height - half))

    setLens({ x: clampedX, y: clampedY })
    setContainerWidth(rect.width)
  }
  return (
    <section>
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/5 aspect-square"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />

        {isHovering && (
          <div
            className="pointer-events-none absolute border border-white/70 shadow-lg ring-1 ring-black/10"
            style={{
              width: LENS_SIZE,
              height: LENS_SIZE,
              left: lens.x - LENS_SIZE / 2,
              top: lens.y - LENS_SIZE / 2,
              borderRadius: 16,
              backgroundImage: `url(${activeImage.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${ZOOM * 100}%`,
              backgroundPosition: `${(lens.x / (containerWidth || 1)) * 100}% ${(lens.y / (containerWidth || 1)) * 100}%`,
            }}
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((img, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={`${img.src}-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  'relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border bg-black/5 transition',
                  isActive
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-black/10 hover:border-black/20',
                )}
                aria-label={`Ver imagen ${idx + 1}`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="80px" className="object-cover" />
              </button>
            )
          })}
        </div>
      )}
    </section>
  )
}