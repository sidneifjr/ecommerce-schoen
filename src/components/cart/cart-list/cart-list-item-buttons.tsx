import Image from 'next/image'
import { use } from 'react'

import minus from '@/assets/minus.svg'
import plus from '@/assets/plus.svg'
import trash from '@/assets/trash.svg'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/contexts/cart-context'
import { ProductItemTypes } from '@/types'

export function CartListItemButtons(props: ProductItemTypes) {
  const { handleCartAction } = use(CartContext)

  return (
    <div className="flex flex-1 justify-end gap-3 rounded-lg">
      <Button
        className="h-full bg-[#FF0000]/10 px-3 shadow-none"
        onClick={(e) => handleCartAction(e, 'delete', props.id)}
      >
        <Image
          src={trash}
          alt="props 1"
          width={18}
          height={20}
          className="rounded"
        />
      </Button>

      <div className="flex w-full max-w-[104px] items-center justify-between rounded-lg bg-gray-100 px-2">
        <Button
          className="h-6 w-6 rounded-l-md bg-transparent p-0 shadow-none hover:bg-white"
          onClick={(e) => handleCartAction(e, 'remove', props.id)}
        >
          <Image
            src={minus}
            alt="minus"
            width={12}
            height={1}
            className="h-auto w-auto"
          />
        </Button>

        <span className="font-inter text-[#788A91]">{props.quantity}</span>

        <Button
          className="h-6 w-6 bg-transparent p-0 shadow-none hover:bg-white"
          onClick={(e) => handleCartAction(e, 'add', props)}
        >
          <Image
            src={plus}
            alt="plus"
            width={12}
            height={12}
            className="rounded"
          />
        </Button>
      </div>
    </div>
  )
}
