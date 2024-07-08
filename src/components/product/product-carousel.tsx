'use client'

import Image, { StaticImageData } from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useCarousel } from '@/hooks/useCarousel'

import { ProductCarouselThumb } from './product-carousel-thumb'

type CarouselTypes = {
  slides: StaticImageData[]
}

export function ProductCarousel({ slides }: CarouselTypes) {
  const { setApi, selectedIndex, emblaThumbsRef, onThumbClick } = useCarousel()

  return (
    <div className="col-span-1 flex gap-4 sm:gap-6">
      <Carousel
        orientation="vertical"
        onClick={(e) => e.preventDefault()}
        ref={emblaThumbsRef}
      >
        <CarouselContent className="flex h-full sm:flex-col">
          {slides.map((slide, index) => (
            <CarouselItem
              key={crypto.randomUUID()}
              className="h-[40px] w-[120px] basis-1/4 sm:h-[81px] sm:w-[105px]"
            >
              <ProductCarouselThumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                slide={slide.src}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        onClick={(e) => e.preventDefault()}
        orientation="vertical"
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="mt-0 h-[400px] sm:h-[550px] sm:w-[467px]">
          {slides.map((slide) => (
            <CarouselItem key={crypto.randomUUID()} className="p-0">
              <Image
                src={slide.src}
                alt=""
                width={471}
                height={467}
                quality={100}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
