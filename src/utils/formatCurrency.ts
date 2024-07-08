export function formatCurrency(value: number) {
  const currency = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value))

  return currency
}
