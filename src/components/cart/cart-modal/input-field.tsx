import { Eye, EyeOff } from 'lucide-react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useShowPassword } from '@/hooks/useShowPassword'

type Inputs = {
  name: string
  email: string
  phone: number
  password: string
}

type InputFieldTypes = {
  name: 'name' | 'email' | 'password' | 'phone'
  placeholder: string
  error?: FieldError
  errorMessage: string
  register: UseFormRegister<Inputs>
}

export function InputField({
  name,
  placeholder,
  error,
  errorMessage,
  register,
}: InputFieldTypes) {
  const { showPassword, handleShowPassword } = useShowPassword()

  return (
    <div className="flex flex-col gap-2">
      {error && <p className="text-sm text-destructive">{errorMessage}</p>}

      {name === 'password' ? (
        <div className="relative">
          <Input
            placeholder="Senha"
            className={`h-12 rounded-md border-b-[#E5E7EB] p-3 font-inter text-sm leading-6 text-[#6B7280] shadow-none ${error && 'border-destructive'}`}
            {...register(name, { required: true })}
            type={showPassword ? 'text' : 'password'}
          />

          <Button
            variant="ghost"
            className={`absolute right-0 top-0 h-full ${showPassword ? 'bg-gray-300' : ''}`}
            onClick={(e) => handleShowPassword(e)}
          >
            {showPassword ? (
              <EyeOff className="text-green-light" width={16} height={16} />
            ) : (
              <Eye className="text-green-light" width={16} height={16} />
            )}
          </Button>
        </div>
      ) : (
        <Input
          className={`h-12 rounded-md border-b-[#E5E7EB] p-3 font-inter text-sm leading-6 text-[#6B7280] shadow-none ${error && 'border-destructive'}`}
          placeholder={placeholder}
          {...register(name, { required: true })}
        />
      )}
    </div>
  )
}
