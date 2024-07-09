import './globals.css'
import '@fontsource-variable/inter'
import '@fontsource/poppins'

import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { CartProvider } from '@/contexts/cart-context'

export const metadata: Metadata = {
  title: {
    template: '%s | E-Commerce Schoen',
    default: 'Home | E-Commerce Schoen',
  },
  description: 'Estilo e conforto para os seus pés',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />

          <main className="pb-12">{children}</main>

          <Toaster richColors />
        </CartProvider>
      </body>
    </html>
  )
}
