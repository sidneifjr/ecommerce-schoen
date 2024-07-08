'use client'

import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import { NoProductsFound } from '@/components/no-products-found'
import { CartContext } from '@/contexts/cart-context'
import { formatCurrency } from '@/utils/formatCurrency'

import { H2 } from '../../typography/h2'
import { Large } from '../../typography/large'
import { CartListItemButtons } from './cart-list-item-buttons'

export function CartList() {
  const { cartItems } = use(CartContext)

  return (
    <div className="col-span-4 flex w-full flex-col items-start gap-5 md:gap-10">
      {cartItems.length === 0 && (
        <NoProductsFound
          orientation="horizontal"
          text="Não existem items no carrinho."
        />
      )}

      {cartItems.map((cartItem) => {
        const { id, name, image, price, slug } = cartItem

        return (
          <div
            key={id}
            className="flex gap-4 border-b border-b-[#f3f4f6] pb-4 md:gap-10 md:border-0 md:pb-0"
          >
            <Link href={slug}>
              <Image
                src={image}
                alt={name}
                width={150}
                height={150}
                className="min-h-[100px] min-w-[100px] flex-1 rounded transition-transform group-hover:scale-110 xs:min-h-[150px] xs:min-w-[150px]"
              />
            </Link>

            <div className="col-span-4 flex max-w-[618px] flex-col gap-3">
              <H2 className="font-poppins text-lg font-medium leading-6 md:text-2xl">
                Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia -
                Camursa
              </H2>

              <div className="flex w-full flex-1 flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
                <Large className="flex-1 font-poppins text-[20px] font-semibold leading-[34px] md:text-[28px] md:leading-[42px]">
                  {formatCurrency(price)}
                </Large>

                <CartListItemButtons {...cartItem} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
