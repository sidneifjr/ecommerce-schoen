import Image from 'next/image'

import sad from '@/assets/sad.svg'

import { Paragraph } from './typography/paragraph'

type NoProductsFoundTypes = {
  text: string
  orientation: 'vertical' | 'horizontal'
}

export function NoProductsFound({ text, orientation }: NoProductsFoundTypes) {
  return (
    <div
      data-testid="no-products-found"
      className={`flex items-center gap-6 pt-8 ${orientation === 'horizontal' ? 'flex-row' : 'flex-col'}`}
    >
      <Image src={sad} alt="Sad" width={200} height={200} />

      <Paragraph className="max-w-96 text-center font-inter font-semibold leading-6 text-gray-500">
        {text}
      </Paragraph>
    </div>
  )
}
