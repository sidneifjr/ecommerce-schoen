'use client'

import Image, { StaticImageData } from 'next/image'
import { Link } from 'next-view-transitions'
import { MouseEvent, use } from 'react'
import { toast } from 'sonner'

import pix from '@/assets/pix.svg'
import { H2 } from '@/components/typography/h2'
import { H3 } from '@/components/typography/h3'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/contexts/cart-context'
import { formatCurrency } from '@/utils/formatCurrency'

type ProductInfoTypes = {
  id: number
  name: string
  image: StaticImageData
  slug: string
  price: number
  category: string
}

export function ProductInfo({
  id,
  name,
  image,
  slug,
  price,
  category,
}: ProductInfoTypes) {
  const { handleCartAction } = use(CartContext)

  function handleItem(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    toast.success('Item adicionado ao carrinho!')

    handleCartAction(e, 'add', {
      id,
      name,
      image,
      slug,
      price,
      category,
    })
  }

  return (
    <div className="col-span-1 flex flex-col gap-8 pb-5">
      <div className="flex flex-col gap-2">
        <span className="font-inter text-sm capitalize leading-6 text-gray-500">
          {category}
        </span>

        <H2 className="font-poppins text-[28px] leading-10 text-black">
          {name}
        </H2>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-gray-50 py-5">
        <Image
          src={pix}
          alt="pix"
          width={20}
          height={20}
          className="h-auto w-auto"
        />

        <div className="flex flex-col items-center">
          <span className="font-inter text-sm leading-6 text-gray-400 line-through">
            De R$ 8.999,00
          </span>

          <H3 className="font-poppins text-[32px] font-semibold leading-[48px]">
            {' '}
            {formatCurrency(price)}
          </H3>

          <span className="font-inter text-sm leading-6 text-gray-500">
            no pix <mark className="bg-transparent text-green-light">10%</mark>{' '}
            de desconto
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full rounded border-green-light bg-green-light p-6 text-sm leading-6 text-white transition-colors hover:bg-white hover:text-green-light"
        onClick={(e) => handleItem(e)}
        asChild
      >
        <Link
          href="/cart"
          className="rounded border-green-light bg-green-light p-6 text-sm leading-6 text-white transition-colors hover:bg-white hover:text-green-light"
        >
          Adicionar ao carrinho
        </Link>
      </Button>
    </div>
  )
}
