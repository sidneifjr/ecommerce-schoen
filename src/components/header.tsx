'use client'

import { CircleUserRound, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import logo from '@/assets/logo.svg'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { CartContext } from '@/contexts/cart-context'

import { H1 } from './typography/h1'

const menuItens = [
  {
    name: 'Carrinho',
    url: '/cart',
    image: <ShoppingCart width={20} height={20} className="text-green-light" />,
  },
  {
    name: 'Entrar',
    url: '/login',
    image: (
      <CircleUserRound width={20} height={20} className="text-green-light" />
    ),
  },
]

export function Header() {
  const { cartItems } = use(CartContext)

  return (
    <header
      className="border-b border-b-[#f3f4f6] px-5 py-5"
      data-testid="header"
    >
      <div className="mx-auto flex max-w-[1232px] items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={logo}
            alt="E-commerce Schoen"
            data-testid="logo"
            width={45}
            height={45}
            quality={100}
            priority={true}
          />

          <H1 className="font-poppins text-2xl font-semibold uppercase tracking-tight text-green-light">
            Schoen
          </H1>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-2 lg:gap-9">
            {menuItens.map(({ name, url, image }) => {
              return (
                <NavigationMenuItem key={crypto.randomUUID()}>
                  {' '}
                  <Link
                    href={url}
                    className={`flex gap-3 ${url === '/login' ? 'pointer-events-none cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                  >
                    <span
                      className={`relative flex items-center gap-1 text-sm leading-6 text-gray-500 xs:gap-2 ${name === 'Carrinho' && cartItems?.length !== 0 ? 'pr-6' : ''}`}
                    >
                      {image}

                      {name}

                      {name === 'Carrinho'
                        ? cartItems?.length !== 0 && (
                            <span className="absolute right-0 top-[50%] flex h-4 w-4 -translate-y-[50%] items-center justify-center rounded-full bg-green-light text-center font-inter text-xs text-white xs:h-5 xs:w-5 xs:text-base">
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
