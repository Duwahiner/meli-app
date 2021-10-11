export const formatNumber = (number = 0) => {
  const intlNumber = new Intl.NumberFormat('in')

  return intlNumber.format(number)
}