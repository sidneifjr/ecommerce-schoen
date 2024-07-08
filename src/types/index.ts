export type ProductItemTypes = {
  id: number
  slug: string
  category: string
  name: string
  price: number
  image: string
  quantity?: number
}

export type ProductListInputFields = {
  botas?: boolean | undefined
  chinelos?: boolean | undefined
  chuteiras?: boolean | undefined
  search?: string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  priceRange?: any
  sandalias?: boolean | undefined
  sapatenis?: boolean | undefined
  tenis?: boolean | undefined
  tenisdecorrida?: boolean | undefined
}
