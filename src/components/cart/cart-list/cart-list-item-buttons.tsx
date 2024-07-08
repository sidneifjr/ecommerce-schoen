import { CircleMinus, CirclePlus, Trash2 } from 'lucide-react'
import { use } from 'react'

import { Button } from '@/components/ui/button'
import { CartContext } from '@/contexts/cart-context'
import { ProductItemTypes } from '@/types'

export function CartListItemButtons(props: ProductItemTypes) {
  const { handleCartAction } = use(CartContext)

  return (
    <div className="flex flex-1 justify-end gap-3 rounded-lg">
      <Button
        className="h-full bg-[#FF0000]/10 px-3 shadow-none hover:bg-[#FF0000]/25"
        onClick={(e) => handleCartAction(e, 'delete', props.id)}
      >
        <Trash2 className="text-red-600" />
      </Button>

      <div className="flex w-full max-w-[104px] items-center justify-between rounded-lg bg-gray-100 px-2">
        <Button
          className="h-6 w-6 rounded-l-md bg-transparent p-0 shadow-none hover:bg-white"
          onClick={(e) => handleCartAction(e, 'remove', props.id)}
        >
          <CircleMinus className="text-gray-500" />
        </Button>

        <span className="font-inter text-[#788A91]">{props.quantity}</span>

        <Button
          className="h-6 w-6 bg-transparent p-0 shadow-none hover:bg-white"
          onClick={(e) => handleCartAction(e, 'add', props)}
        >
          <CirclePlus className="text-gray-500" />
        </Button>
      </div>
    </div>
  )
}
