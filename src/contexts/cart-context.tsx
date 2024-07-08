'use client'

import { createContext, MouseEvent, ReactNode } from 'react'

import { useCart } from '@/hooks/useCart'
import { ProductItemTypes } from '@/types'

type CartContextType = {
  cartItems: ProductItemTypes[]
  addToCart: (product: ProductItemTypes) => void
  removeFromCart: (productRemovedId: number) => void
  deleteFromCart: (productRemovedId: number) => void

  handleCartAction: (
    e: MouseEvent<HTMLButtonElement>,
    action: 'add' | 'remove' | 'delete',
    product: ProductItemTypes | number,
  ) => void
}

type CartProviderProps = {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    handleCartAction,
  } = useCart()

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        handleCartAction,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
