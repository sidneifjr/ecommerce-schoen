'use client'

import { useFindProduct } from '@/hooks/useFindProduct'

import { ProductCarousel } from './product-carousel'
import { ProductInfo } from './product-info'

export function Product() {
  const product = useFindProduct()

  return (
    <>
      <ProductCarousel slides={product.slides} />

      <ProductInfo {...product} />
    </>
  )
}
