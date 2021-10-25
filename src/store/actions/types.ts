// eslint-disable-next-line no-shadow
export enum ActionTypes {
  ADD_PRODUCT_CART = 'ADD_PRODUCT_CART',
  REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART',
}

export type SelectedProduct = {
  productID: number;
  image: string;
  name: string;
  price: number;
  selected: boolean;
};
