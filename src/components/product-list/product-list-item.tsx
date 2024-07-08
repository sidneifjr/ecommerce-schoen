import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, use } from 'react'
import { toast } from 'sonner'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CartContext } from '@/contexts/cart-context'
import { formatCurrency } from '@/utils/formatCurrency'
import { ProductItemTypes } from '@/types'

import { Button } from '../ui/button'

export function ProductItem({
  id,
  slug,
  category,
  name,
  price,
  image,
  quantity,
}: ProductItemTypes) {
  const { handleCartAction } = use(CartContext)

  function handleItem(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    toast.success('Item adicionado ao carrinho!')

    handleCartAction(e, 'add', {
      id,
      slug,
      category,
      name,
      price,
      image,
      quantity,
    })
  }

  return (
    <Card className="group col-span-1 flex flex-col gap-6 border-0 p-0 shadow-none">
      <Link href={slug} className="flex flex-col gap-6">
        <CardHeader className="p-0">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded transition-transform group-hover:scale-110"
            />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 p-0">
          <span className="font-inter text-sm capitalize text-gray-500">
            {category}
          </span>

          <CardTitle className="overflow-ellipsis font-poppins text-xl font-semibold xs:min-h-14">
            {name.length > 53 ? `${name.substring(0, 53)}...` : name}
          </CardTitle>

          <CardDescription className="flex flex-col">
            <span className="font-inter text-sm text-gray-400 line-through">
              De R$ 8.999,00
            </span>

            <span className="flex items-center gap-3">
              <strong className="font-poppins text-[28px] leading-[42px] text-black">
                {formatCurrency(price)}
              </strong>

              <small className="font-inter text-sm leading-[24px] text-primary-500">
                10% OFF
              </small>
            </span>
          </CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="p-0">
        <Button
          variant="outline"
          className="w-full rounded border-primary-500 p-6 text-sm leading-6 text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"
          onClick={(e) => handleItem(e)}
        >
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  )
}
