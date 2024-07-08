import { MouseEvent, useState } from 'react'

export function useShowPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  function handleShowPassword(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    setShowPassword(!showPassword)
  }

  return { showPassword, handleShowPassword }
}
