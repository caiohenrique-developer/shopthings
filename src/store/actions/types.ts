// eslint-disable-next-line no-shadow
export enum ActionTypes {
  ADD_PRODUCT_CART = 'ADD_PRODUCT_CART',
  REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART',
}

export type SelectedProduct = {
  productID: number;
  image: string | StaticImageData;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  rating: {
    count: number;
  };
};
