import { Reducer } from 'react';

import { ActionTypes, SelectedProduct } from '../actions/types';
import { ActionProps } from './types';

const { ADD_PRODUCT_TO_CART } = ActionTypes;

const initialState = {
  name: 'Undefined',
  price: 0.01,
  image: '/',
};

export const addProductToCartReducer: Reducer<SelectedProduct, ActionProps> = (
  state = initialState,
  action: ActionProps,
): SelectedProduct => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return action.payload;

    default:
      return state;
  }
};
