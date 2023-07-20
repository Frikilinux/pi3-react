export const formatQuantityNumber = (num) => {
  return new Intl.NumberFormat('es-AR').format(num)
}
