import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

import { Loader } from '@/components/loader'
import { Button } from '@/components/ui/button'

import { InputField } from './input-field'

type Inputs = {
  name: string
  email: string
  phone: number
  password: string
}

type CartModalFormDefaultTypes = {
  register: UseFormRegister<Inputs>
  handleSubmit: UseFormHandleSubmit<Inputs, undefined>
  onSubmit: SubmitHandler<Inputs>
  errors: FieldErrors<Inputs>
  isSubmitting: boolean
  isSubmitSuccessful: boolean
}

export function CartModalFormDefault({
  register,
  handleSubmit,
  errors,
  isSubmitting,
  onSubmit,
}: CartModalFormDefaultTypes) {
  const inputs = [
    {
      name: 'name',
      placeholder: 'Nome completo',
      error: errors.name,
      errorMessage: 'Nome não pode ser vazio.',
      register,
    },

    {
      name: 'email',
      placeholder: 'Email',
      error: errors.email,
      errorMessage: 'Formato de email deve ser: exemplo@gmail.com',
      register,
    },

    {
      name: 'phone',
      placeholder: 'Telefone',
      error: errors.phone,
      errorMessage: 'Telefone não pode ser vazio e deve ser um número.',
      register,
    },

    {
      name: 'password',
      placeholder: 'Senha',
      error: errors.password,
      errorMessage: 'Senha deve possuir um mínimo de 6 caracteres.',
      register,
    },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6">
      {inputs.map((input) => {
        // @ts-expect-error: type error does not make sense.
        return <InputField key={crypto.randomUUID()} {...input} />
      })}

      <Button
        variant="outline"
        className="w-full rounded border-primary-500 bg-primary-500 p-6 text-sm font-normal leading-6 text-white transition-colors hover:bg-transparent hover:text-primary-500"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loader /> : 'Criar minha conta'}
      </Button>
    </form>
  )
}
