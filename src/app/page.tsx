import { Hero } from '@/components/hero'
import ProductList from '@/components/product-list'

export default function Home() {
  return (
    <section className="flex flex-col gap-12">
      <Hero />

      <ProductList />
    </section>
  )
}
