'use client'

import { MouseEvent, useState } from 'react'

import { ProductItemTypes } from '@/types'

export function useCart() {
  const [cartItems, setCartItems] = useState<ProductItemTypes[]>([])

  function addToCart(newProduct: ProductItemTypes) {
    setCartItems((state) => {
      const existingProduct = state.find((item) => item.id === newProduct.id)

      if (existingProduct) {
        return state.map((item) =>
          item.id === newProduct.id
            ? { ...item, quantity: item.quantity! + 1 }
            : item,
        )
      } else {
        return [...state, { ...newProduct, quantity: 1 }]
      }
    })
  }

  function removeFromCart(productRemovedId: number) {
    setCartItems((state) => {
      const updatedProducts = state.map((product) =>
        product.id === productRemovedId
          ? {
              ...product,
              quantity: product.quantity! > 1 ? product.quantity! - 1 : 0,
            }
          : product,
      )

      return updatedProducts.filter((product) => product.quantity! > 0)
    })
  }

  function deleteFromCart(productRemovedId: number) {
    const updatedProducts = cartItems.filter(
      (cartItem) => cartItem.id !== productRemovedId,
    )

    setCartItems(updatedProducts)
  }

  function handleCartAction(
    e: MouseEvent<HTMLButtonElement>,
    action: 'add' | 'remove' | 'delete',
    product: ProductItemTypes | number,
  ) {
    e.preventDefault()

    switch (action) {
      case 'add':
        addToCart(product as ProductItemTypes)
        break

      case 'remove':
        removeFromCart(product as number)
        break

      case 'delete':
        deleteFromCart(product as number)
        break

      default:
        throw new Error('Unknown action')
    }
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    handleCartAction,
  }
}
