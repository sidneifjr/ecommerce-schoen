import Image from 'next/image'
import { Link } from 'next-view-transitions'
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
import { ProductItemTypes } from '@/types'
import { formatCurrency } from '@/utils/formatCurrency'

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
              width={290}
              height={330}
              sizes="100vw"
              className="h-80 w-72 rounded object-contain transition-transform group-hover:scale-110"
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

              <small className="font-inter text-sm font-semibold leading-[24px] text-green-light">
                10% OFF
              </small>
            </span>
          </CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="p-0">
        <Button
          variant="outline"
          className="w-full rounded border-green-light bg-green-light p-6 text-sm leading-6 text-white transition-colors hover:bg-white hover:text-green-light"
          onClick={(e) => handleItem(e)}
        >
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  )
}
