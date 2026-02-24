'use client'

import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS, FaqItem } from '@/shared/lib/constants'
import { cn } from '@/shared/lib/utils'

type Props = {
  items?: FaqItem[]
  allowMultipleOpen?: boolean
}

export function FAQ({ items = FAQ_ITEMS, allowMultipleOpen = false }: Props) {
  const [openIds, setOpenIds] = useState<string[]>([])

  const isOpen = (id: string) => openIds.includes(id)

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const currentlyOpen = prev.includes(id)

      if (allowMultipleOpen) {
        return currentlyOpen ? prev.filter(x => x !== id) : [...prev, id]
      }

      return currentlyOpen ? [] : [id]
    })
  }

  const rendered = useMemo(() => items, [items])

  return (
    <div className="space-y-3">
      {rendered.map((item) => {
        const open = isOpen(item.id)

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-black/10 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
              aria-controls={`faq-${item.id}`}
            >
              <span className="text-sm font-semibold text-ink md:text-base">
                {item.question}
              </span>

              <span
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-ink/70 transition-all',
                  open ? 'rotate-180 bg-primary/10 text-primary' : 'rotate-0',
                )}
              >
                <ChevronDown size={18} strokeWidth={2} />
              </span>
            </button>

            <div
              id={`faq-${item.id}`}
              className={[
                'grid transition-all duration-300 ease-out',
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              ].join(' ')}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-relaxed text-ink/70">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}