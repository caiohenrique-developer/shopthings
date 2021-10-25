import { ActionTypes, SelectedProduct } from './types';

const { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART } = ActionTypes;

export const productCartManager = (selectedProduct: SelectedProduct) => {
  return {
    type:
      selectedProduct.selected === true
        ? ADD_PRODUCT_CART
        : REMOVE_PRODUCT_CART,
    payload: selectedProduct,
  };
};
