'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import orderFulfilled from '@/assets/order-fulfilled.svg'
import { H3 } from '@/components/typography/h3'
import { Paragraph } from '@/components/typography/paragraph'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'

export function CartModalFormFulfilled() {
  const router = useRouter()

  return (
    <form className="flex flex-col gap-6 p-6">
      <div className="flex flex-col items-center gap-1">
        <Image
          src={orderFulfilled}
          alt="Ocultar senha"
          width={160}
          height={160}
        />

        <div className="flex flex-col gap-2">
          <H3 className="text-center font-poppins text-xl font-medium leading-8">
            Seu pedido foi concluído!
          </H3>

          <Paragraph className="font-inter text-sm leading-6">
            Retornaremos com atualizações em seu e-mail.
          </Paragraph>
        </div>
      </div>

      <DialogClose asChild>
        <Button
          variant="outline"
          className="w-full rounded border-primary-500 bg-primary-500 p-6 text-sm font-normal leading-6 text-white transition-colors hover:bg-transparent hover:text-primary-500"
          onClick={() => {
            toast.success(
              'Obrigado por comprar conosco! Seu produto chegará em breve.',
            )
            router.push('/')
          }}
        >
          Entendi
        </Button>
      </DialogClose>
    </form>
  )
}
