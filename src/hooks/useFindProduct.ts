import { usePathname } from 'next/navigation'

import { productList } from '@/data/product-list'

export function useFindProduct() {
  // Comparar o slug do item em 'product-list' com o pathname presente na URL.
  const pathname = usePathname()

  const product = productList.find((product) => product.slug === pathname)
  const { id, name, image, slug, price, category, slides } = product!

  return { id, name, image, slug, price, category, slides }
}
