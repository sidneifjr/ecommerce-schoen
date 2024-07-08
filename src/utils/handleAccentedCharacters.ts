// https://stackoverflow.com/a/49901740
export function handleAccentedCharacters(value: string) {
  const normalizedString = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return normalizedString
}
