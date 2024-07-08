import Image from 'next/image'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'

import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { handleAccentedCharacters } from '@/utils/handleAccentedCharacters'
import { ProductListInputFields } from '@/types'

import { Slider } from '../slider'
import { H3 } from '../typography/h3'
import { Input } from '../ui/input'

type SideMenuProps = {
  register: UseFormRegister<ProductListInputFields>
  setValue: UseFormSetValue<ProductListInputFields>
}

const categoryCheckboxes = [
  'botas',
  'chinelos',
  'chuteiras',
  'sandálias',
  'sapatênis',
  'tênis',
  'tênis de corrida',
]

export function ProductListSideMenu({ register, setValue }: SideMenuProps) {
  return (
    <aside className="w-full flex-col gap-4 md:flex lg:w-auto">
      <div className="w-full flex-1 rounded-lg bg-gray-50 p-4 lg:max-w-[290px]">
        <div className="flex flex-col gap-4 bg-white p-4">
          <H3 className="font-poppins text-base font-semibold text-[#222222]">
            Categorias
          </H3>

          <div className="relative flex w-full max-w-[400px] justify-between">
            <Image
              src="/search.svg"
              alt="Search"
              width={12}
              height={12}
              className="absolute right-3 top-[50%] translate-y-[-50%]"
            />

            <Input
              className="w-full rounded-lg border-0 bg-gray-100 px-3 py-[14px] text-[14px] placeholder:text-gray-500"
              placeholder="Pesquisar"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 xs:grid-cols-4 lg:flex lg:flex-col">
            {categoryCheckboxes.map((item) => {
              return (
                <label
                  key={crypto.randomUUID()}
                  className="flex w-full cursor-pointer items-center gap-2 font-inter text-sm font-normal leading-5 text-gray-500 md:leading-6"
                >
                  <input
                    type="checkbox"
                    {...register(
                      // @ts-expect-error: the error exhibited by TypeScript does not make sense.
                      handleAccentedCharacters(
                        item.toLowerCase().replaceAll(' ', ''),
                      ),
                    )}
                  />

                  {capitalizeFirstLetter(item.toLowerCase())}
                </label>
              )
            })}
          </div>
        </div>
      </div>

      <div className="w-full flex-1 rounded-lg bg-gray-50 p-4 lg:max-w-[290px]">
        <div className="flex flex-col gap-4 bg-white p-4">
          <H3 className="font-poppins text-base font-semibold text-[#222222]">
            Preço
          </H3>

          <div className="relative flex w-full justify-between lg:max-w-[400px]">
            <Slider
              defaultValue={[1, 400]}
              minStepsBetweenThumbs={1}
              max={400}
              min={1}
              step={1}
              onValueChange={(value) => setValue('priceRange', value)}
              className="w-full"
            />
          </div>

          <div className="flex gap-4">
            <Input
              className="pointer-events-none w-full rounded-lg border-0 bg-gray-100 px-3 py-[14px] text-[14px] placeholder:text-gray-500"
              placeholder="Mínimo"
              name="minimum"
              // value={valueRange[0]}
              readOnly
            />

            <Input
              className="pointer-events-none w-full rounded-lg border-0 bg-gray-100 px-3 py-[14px] text-[14px] placeholder:text-gray-500"
              placeholder="Máximo"
              name="maximum"
              // value={valueRange[1]}
              readOnly
            />
          </div>
        </div>
      </div>
    </aside>
  )
}
