import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

import { type CarouselApi } from '@/components/ui/carousel'

export function useCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const index = api.selectedScrollSnap()
      setSelectedIndex(index)
    }

    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api || !emblaThumbsApi) return
      api.scrollTo(index)
      setSelectedIndex(index)
    },
    [api, emblaThumbsApi],
  )

  return { setApi, selectedIndex, emblaThumbsRef, onThumbClick }
}
