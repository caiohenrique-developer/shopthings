// eslint-disable-next-line no-shadow
export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
}

export type SelectedProduct = {
  name: string;
  price: number;
  image: string;
};
