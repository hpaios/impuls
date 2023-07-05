export const convertToPrise = (prize: string): string => {
  return new Intl.NumberFormat('en-DE').format(Number(prize))
}
