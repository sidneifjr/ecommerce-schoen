import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { productList } from '@/data/product-list'
import { handleAccentedCharacters } from '@/utils/handleAccentedCharacters'

const FormFilterSchema = z.object({
  search: z.string().optional(),
  botas: z.boolean().optional(),
  chinelos: z.boolean().optional(),
  chuteiras: z.boolean().optional(),
  sandalias: z.boolean().optional(),
  sapatenis: z.boolean().optional(),
  tenis: z.boolean().optional(),
  tenisdecorrida: z.boolean().optional(),
  priceRange: z.any().optional(),
})

type FormFilterInputs = z.infer<typeof FormFilterSchema>

export function useFilterProducts() {
  const [products, setProducts] = useState(productList)

  const { register, handleSubmit, setValue } = useForm<FormFilterInputs>({
    resolver: zodResolver(FormFilterSchema),
  })

  const onSubmit: SubmitHandler<FormFilterInputs> = (
    data: FormFilterInputs,
  ) => {
    const {
      search,
      botas,
      chinelos,
      chuteiras,
      sandalias,
      sapatenis,
      tenis,
      tenisdecorrida,
      priceRange,
    } = data

    if (search) {
      const listFilteredPerName = filterProductsPerName(search)
      setProducts(listFilteredPerName)
    }

    if (priceRange) {
      const listFilteredPerPriceRange = filterProductsPerRange(priceRange)
      setProducts(listFilteredPerPriceRange)
    }

    if (botas) {
      const listFilteredPerCheckbox = filterProductsPerCheckbox('botas')
      setProducts(listFilteredPerCheckbox)
    }

    if (chinelos) {
      const listFilteredPerCheckbox = filterProductsPerCheckbox('chinelos')
      setProducts(listFilteredPerCheckbox)
    }

    if (chuteiras) {
      const listFilteredPerCheckbox = filterProductsPerCheckbox('chuteiras')
      setProducts(listFilteredPerCheckbox)
    }

    if (sandalias) {
      const listFilteredPerCheckbox = filterProductsPerCheckbox('sandalias')
      setProducts(listFilteredPerCheckbox)
    }

    if (sapatenis) {
      const listFilteredPerCheckbox = filterProductsPerCheckbox('sapatenis')
      setProducts(listFilteredPerCheckbox)
    }

    if (tenis) {
      const listFilteredPerCheckbox = filterProductsPerCheckbox('tenis')
      setProducts(listFilteredPerCheckbox)
    }

    if (tenisdecorrida) {
      const listFilteredPerCheckbox =
        filterProductsPerCheckbox('tenisdecorrida')
      setProducts(listFilteredPerCheckbox)
    }
  }

  function filterProductsPerName(value: string) {
    const trimmedValue = value.trim()

    // Se a procura for vazia, exibir os itens originais novamente.
    if (trimmedValue === '') {
      return productList
    }

    const filteredProducts = productList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    )

    return filteredProducts
  }

  function filterProductsPerCheckbox(value: string) {
    const listFiltered = productList.filter(
      (product) => handleAccentedCharacters(product.category) === value,
    )

    return listFiltered
  }

  function filterProductsPerRange(priceRange: number[]) {
    const [minimumPriceRange, maximumPriceRange] = priceRange

    const listFilteredPerRange = productList.filter(
      (product) =>
        product.price >= minimumPriceRange &&
        product.price <= maximumPriceRange,
    )

    return listFilteredPerRange
  }

  return { products, register, handleSubmit, setValue, onSubmit }
}
