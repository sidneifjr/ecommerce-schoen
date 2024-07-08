'use client'

import { useFilterProducts } from '@/hooks/useFilterProducts'

import { NoProductsFound } from '../no-products-found'
import { ProductListHeading } from './product-list-heading'
import { ProductItem } from './product-list-item'
import { ProductListSideMenu } from './product-list-side-menu'

export default function ProductList() {
  const { products, register, handleSubmit, setValue, onSubmit } =
    useFilterProducts()

  const productsLength = products.length

  return (
    <div className="flex flex-col gap-12 px-5">
      <form
        className="mx-auto flex w-full max-w-[1232px] flex-col gap-6 lg:gap-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProductListHeading
          register={register}
          productsLength={productsLength}
        />

        <div className="flex flex-col items-start gap-6 lg:flex-row">
          <ProductListSideMenu register={register} setValue={setValue} />

          <div className="flex-1">
            {productsLength === 0 && (
              <NoProductsFound
                orientation="vertical"
                text="Lamentamos, mas não encontramos produtos que se encaixem nos parâmetros
              pedidos."
              />
            )}

            <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3">
              {products?.map((product) => {
                return <ProductItem key={product.id} {...product} />
              })}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
