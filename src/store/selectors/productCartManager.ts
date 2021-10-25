import { SelectorStateProps } from './types';

export const productCartManagerSelector = (state: SelectorStateProps) =>
  state.productCartManager;
export const productCartManagerTotalPriceSelector = (
  state: SelectorStateProps,
) => {
  const totalPrice = state.productCartManager
    .filter(({ price }) => price)
    .reduce((acc, { price }) => acc + price, 0);
  return totalPrice;
};
