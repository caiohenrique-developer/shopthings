import { Reducer } from 'react';

import { ActionTypes } from '../actions/types';
import { ActionProps } from './types';

const { ADD_PRODUCT_TO_CART } = ActionTypes;

const initialState = 0;

export const addProductToCartReducer: Reducer<number, ActionProps> = (
  state = initialState,
  action: ActionProps,
): number => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return action.payload;

    default:
      return state;
  }
};
