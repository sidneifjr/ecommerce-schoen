'use client'

import { use } from 'react'

import { CartContext } from '@/contexts/cart-context'
import { formatCurrency } from '@/utils/formatCurrency'

import { Button } from '../ui/button'
import { CartModal } from './cart-modal'

export function CartDetails() {
  const { cartItems } = use(CartContext)

  const sumOfAllItems = cartItems.reduce<number>((total, current) => {
    if (current.quantity) {
      return total + current.price * current.quantity
    }

    return total
  }, 0)

  return (
    <div className="col-span-2 flex w-full flex-col gap-8 self-start rounded border border-gray-200 p-8">
      <ul className="flex flex-col justify-between">
        <li className="flex w-full justify-between border-b border-[#F3F4F6] pb-6 font-inter text-gray-500">
          Sub total:{' '}
          <span className="font-medium text-black">
            {' '}
            {formatCurrency(Number(sumOfAllItems))}
          </span>
        </li>

        <li className="flex w-full justify-between border-b border-[#F3F4F6] py-6 font-inter text-gray-500">
          Frete: <span className="font-medium text-[#008000]">Grátis</span>
        </li>

        <li className="flex w-full justify-between pt-6 font-inter text-gray-500">
          Valor total:{' '}
          <span className="text-[22px] font-semibold leading-6 text-black">
            {formatCurrency(Number(sumOfAllItems))}
          </span>
        </li>
      </ul>

      <CartModal>
        <Button
          variant="outline"
          className="w-full rounded border-green-light bg-green-light p-6 text-sm leading-6 text-white transition-colors hover:bg-white hover:text-green-light"
          disabled={!cartItems.length}
        >
          Finalizar pedido
        </Button>
      </CartModal>
    </div>
  )
}
