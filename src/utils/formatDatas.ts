export function formatToMoney(number: number) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}

export function formatThreeDigits(number: number) {
  return Intl.NumberFormat().format(number)
}