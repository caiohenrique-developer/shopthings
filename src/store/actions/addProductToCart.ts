import { ActionTypes } from './types';

const { ADD_PRODUCT_TO_CART } = ActionTypes;

export const addProductToCartAction = (productID: number) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: productID,
  };
};
