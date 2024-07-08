import Image from 'next/image'

import loader from '@/assets/loader.svg'

type LoaderProps = {
  height?: number
  width?: number
}

export const Loader = ({ height, width }: LoaderProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Image width={height || 60} height={width || 60} src={loader} alt="" />
    </div>
  )
}
