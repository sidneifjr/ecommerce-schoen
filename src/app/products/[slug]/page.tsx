import { Product } from '@/components/product'
import { productList } from '@/data/product-list'

type ProductProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductProps) {
  const productName = productList.find(
    (product) => product.slug.substring(10, 19) === `${params.slug}`,
  )

  return {
    title: `${productName?.name}`,
  }
}

export default function ProductPage() {
  return (
    <section className="mx-auto max-w-[1232px] px-5 pt-[52px] xl:px-0">
      <form className="w-full max-w-[600px] sm:mx-auto sm:flex sm:flex-col xl:grid xl:max-w-full xl:grid-cols-2 xl:gap-10">
        <Product />
      </form>
    </section>
  )
}
