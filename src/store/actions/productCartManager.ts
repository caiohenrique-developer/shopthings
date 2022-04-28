import { ActionTypes, SelectedProduct } from '@store/actions/types';

const { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, PRODUCT_CART_QUANTITY } =
  ActionTypes;

export const productCartManager = (
  selectedProduct: SelectedProduct | number,
) => {
  return {
    type:
      selectedProduct instanceof Object
        ? ADD_PRODUCT_CART
        : REMOVE_PRODUCT_CART,
    payload: selectedProduct,
  };
};

export const productCartQuantityAction = (
  productID: number,
  quantity: number,
) => {
  return {
    type: PRODUCT_CART_QUANTITY,
    payload: [productID, quantity],
  };
};
