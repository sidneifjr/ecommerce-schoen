'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const CartModalFormSchema = z.object({
  name: z.string().min(1, 'Por favor, escreva seu nome.'),
  email: z.string().email().min(1, 'Por favor, escreva seu email.'),
  phone: z.coerce.number().min(1, 'Por favor, escreva seu telefone.'),
  password: z.string().min(6, 'Por favor, escreva sua senha.'),
})

type CartModalFormInputs = z.infer<typeof CartModalFormSchema>

export function useModal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CartModalFormInputs>({
    resolver: zodResolver(CartModalFormSchema),
  })

  const onSubmit: SubmitHandler<CartModalFormInputs> = (
    data: CartModalFormInputs,
  ) => {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSubmitSuccessful,
    onSubmit,
  }
}
