'use client'

import Image from 'next/image'
import { ReactNode } from 'react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useModal } from '@/hooks/useModal'

import { CartModalFormDefault } from './cart-modal-form-default'
import { CartModalFormFulfilled } from './cart-modal-form-fulfilled'

type CartModalTypes = {
  children: ReactNode
}

export function CartModal({ children }: CartModalTypes) {
  const modal = useModal()

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-96 gap-0 p-0">
        <DialogHeader className="border-b border-gray-100">
          <DialogTitle className="flex justify-between p-6 font-inter text-base font-normal text-gray-500">
            <div className="flex gap-3">
              {!modal.isSubmitSuccessful ? (
                <>
                  <Image
                    src="/customer.svg"
                    alt="Cadastre-se"
                    width={13}
                    height={13}
                    className="h-auto w-auto"
                  />
                  Cadastre-se
                </>
              ) : (
                <>
                  <Image
                    src="/check-circle.svg"
                    alt="Sucesso!"
                    width={13}
                    height={13}
                    className="h-auto w-auto"
                  />
                  Sucesso!
                </>
              )}
            </div>

            <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <Image src="/close.svg" alt="Fechar" width={16} height={16} />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogTitle>
        </DialogHeader>

        {!modal.isSubmitSuccessful ? (
          <CartModalFormDefault {...modal} />
        ) : (
          <CartModalFormFulfilled />
        )}
      </DialogContent>
    </Dialog>
  )
}
