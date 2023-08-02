let price = 0;

export default function calculatePrice(productPrice) {
  price = productPrice * 5;
  price = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return price;
}