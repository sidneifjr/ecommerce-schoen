import Image from 'next/image'
import React from 'react'

import { Button } from '../ui/button'

type PropType = {
  selected: boolean
  onClick: () => void
  slide: string
}

export const ProductCarouselThumb: React.FC<PropType> = (props) => {
  const { selected, slide, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide h-full rounded-lg'.concat(
        selected ? 'embla-thumbs__slide--selected' : '',
      )}
    >
      <Button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number h-full w-[105px] rounded-lg bg-transparent p-0"
      >
        <Image
          src={slide}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full rounded-lg object-contain"
        />
      </Button>
    </div>
  )
}
