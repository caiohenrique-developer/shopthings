import { CurrencyStyle } from '@utils/formatCurrency/types';

export const formattedCurrency = (
  price: number,
  currency: CurrencyStyle['currency'],
): string => {
  let formattedPrice: string;
  const region = currency === 'BRL' ? 'pt-BR' : 'en-US';

  if (price && currency) {
    formattedPrice = Intl.NumberFormat(region, {
      style: 'currency',
      currency,
    }).format(price);
  }

  return formattedPrice;
};
