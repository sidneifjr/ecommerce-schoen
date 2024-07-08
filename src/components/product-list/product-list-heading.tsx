import { Search } from 'lucide-react'
import { UseFormRegister } from 'react-hook-form'

import { ProductListInputFields } from '@/types'

import { H2 } from '../typography/h2'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

type ProductListHeadingTypes = {
  register: UseFormRegister<ProductListInputFields>
  productsLength: number
}

export function ProductListHeading({
  productsLength,
  register,
}: ProductListHeadingTypes) {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <H2 className="flex-1 font-poppins text-lg leading-[30px] text-black md:text-xl">
        {String(productsLength).padStart(2, '0')}{' '}
        {productsLength === 1 ? 'item encontrado' : 'itens encontrados'}
      </H2>

      <div className="relative flex w-full max-w-[280px] justify-between lg:max-w-[400px]">
        <Input
          className="w-full rounded-lg border-0 bg-gray-100 px-3 py-[14px] text-sm leading-6 placeholder:text-gray-500"
          placeholder="Pesquisar"
          {...register('search')}
        />

        <Button
          variant="ghost"
          className="absolute right-0 top-[50%] translate-y-[-50%]"
        >
          <Search width={16} height={16} className="text-green-light" />
        </Button>
      </div>
    </div>
  )
}
