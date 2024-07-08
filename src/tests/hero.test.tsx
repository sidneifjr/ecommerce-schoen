import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Hero } from '@/components/hero'

test('Hero component in rendered correctly', () => {
  const { debug } = render(<Hero />)
  debug()

  const header = screen.getByTestId('hero')
  expect(header).toBeInTheDocument()
})

test('Hero component has text', () => {
  render(<Hero />)

  const header = screen.getByText('Estilo e conforto para os seus pés')
  expect(header).toBeInTheDocument()
})
