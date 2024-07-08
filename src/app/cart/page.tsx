import type { Metadata } from 'next'

import { CartDetails } from '@/components/cart/cart-details'
import { CartList } from '@/components/cart/cart-list'

export const metadata: Metadata = {
  title: 'Carrinho',
}

export default function CartPage() {
  return (
    <section className="mx-auto max-w-[1232px] px-5 pt-[52px] xl:px-0">
      <form className="flex flex-col gap-5 lg:grid lg:grid-cols-6 lg:gap-10">
        <CartList />

        <CartDetails />
      </form>
    </section>
  )
}
