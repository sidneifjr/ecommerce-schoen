import Image from 'next/image'

import heroImage from '@/assets/products/hero-image.png'

import { H1 } from './typography/h1'

export function Hero() {
  return (
    <div
      className="mx-auto mt-6 flex w-full max-w-[1232px] justify-between bg-green-light lg:max-h-96 lg:min-h-96"
      data-testid="hero"
    >
      <div className="flex flex-1 items-center pl-6 2xl:justify-center">
        <H1 className="max-w-[240px] font-poppins text-xl font-semibold leading-6 text-white md:max-w-[419px] md:text-3xl lg:text-5xl lg:leading-[64px]">
          Estilo e conforto para os seus pés
        </H1>
      </div>

      <div className="flex-1">
        <Image
          src={heroImage}
          alt="hero image"
          width={0}
          height={0}
          quality={100}
          sizes="100vw"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}
