import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Header } from '../components/header'

test('If Header component in rendered correctly', () => {
  render(<Header />)

  const header = screen.getByTestId('header')
  expect(header).toBeInTheDocument()
})

test('If logo is rendered correctly', () => {
  render(<Header />)

  const logo = screen.getByTestId('logo')
  expect(logo).toBeInTheDocument()
})
