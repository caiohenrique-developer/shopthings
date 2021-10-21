export const formattedCurrency = (price: number): string => {
  let formattedPrice: string;

  if (price) {
    formattedPrice = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  }

  return formattedPrice;
};
