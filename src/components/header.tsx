'use client'

import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { CartContext } from '@/contexts/cart-context'

const menuItens = [
  {
    name: 'Carrinho',
    url: '/cart',
    image: '/cart.svg',
    alt: 'Carrinho',
  },
  {
    name: 'Entrar',
    url: '/login',
    image: '/customer.svg',
    alt: 'Entrar',
  },
]

export function Header() {
  const { cartItems } = use(CartContext)

  return (
    <header
      className="border-b-[1px] border-b-[#f3f4f6] px-5 py-5"
      data-testid="header"
    >
      <div className="mx-auto flex max-w-[1232px] items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Flow Lab Tech"
            data-testid="logo"
            width={147}
            height={24}
            quality={100}
            priority={true}
            className="w-24 xs:w-auto"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-2 lg:gap-9">
            {menuItens.map(({ name, url, image, alt }) => {
              return (
                <NavigationMenuItem key={crypto.randomUUID()}>
                  {' '}
                  <Link
                    href={url}
                    className={`flex gap-3 ${url === '/login' ? 'pointer-events-none cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                  >
                    <span
                      className={`relative flex gap-1 text-sm leading-6 text-gray-500 xs:gap-3 ${name === 'Carrinho' && cartItems?.length !== 0 ? 'pr-6' : ''}`}
                    >
                      <Image
                        src={image}
                        alt={alt}
                        width={13}
                        height={11}
                        className="h-auto w-auto"
                      />

                      {name}

                      {name === 'Carrinho'
                        ? cartItems?.length !== 0 && (
                            <span className="absolute right-0 top-[50%] flex h-4 w-4 -translate-y-[50%] items-center justify-center rounded-full bg-orange-500 text-center font-poppins text-xs text-white xs:h-5 xs:w-5 xs:text-base">
                              {cartItems?.length}
                            </span>
                          )
                        : ''}
                    </span>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
