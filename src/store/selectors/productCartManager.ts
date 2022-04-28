import { SelectorStateProps } from '@store/selectors/types';

export const productCartManagerSelector = (state: SelectorStateProps) =>
  state.productCartManager;

export const productCartManagerTotalPriceSelector = (
  state: SelectorStateProps,
) => {
  const totalPrice = state.productCartManager
    .filter(({ price }) => price)
    .reduce((acc, { price, quantity }) => price * quantity + acc, 0);
  return totalPrice;
};

export const totalProductCartManagerSelector = (state: SelectorStateProps) => {
  const totalProduct = state.productCartManager
    .filter(({ quantity }) => quantity)
    .reduce((acc, { quantity }) => acc + quantity, 0);
  return totalProduct;
};
