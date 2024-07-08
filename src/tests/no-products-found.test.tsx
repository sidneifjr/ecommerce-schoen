import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { NoProductsFound } from '@/components/no-products-found'

test('NoProductsFound component is rendered correctly', () => {
  render(<NoProductsFound text="Hello World!" orientation="vertical" />)

  const header = screen.getByTestId('no-products-found')
  expect(header).toBeInTheDocument()
})

test('NoProductsFound orientation prop is working correctly', () => {
  render(<NoProductsFound text="Bye World!" orientation="horizontal" />)

  const header = screen.getByTestId('no-products-found')
  expect(header).toBeInTheDocument()
})
