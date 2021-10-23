import { ActionTypes, SelectedProduct } from './types';

const { ADD_PRODUCT_TO_CART } = ActionTypes;

export const addProductToCartAction = (selectedProduct: SelectedProduct) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: selectedProduct,
  };
};
