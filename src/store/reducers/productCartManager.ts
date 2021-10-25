import { Reducer } from 'react';

import { produce } from 'immer';

import { ActionTypes, SelectedProduct } from '@store/actions/types';

import { ProductCartManagerActionProps } from './types';

const { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART } = ActionTypes;
export const productCartManagerReducer: Reducer<
  SelectedProduct[],
  ProductCartManagerActionProps
> = (state = [], action: ProductCartManagerActionProps): SelectedProduct[] => {
  return produce(state, (draft): SelectedProduct[] => {
    switch (action.type) {
      case ADD_PRODUCT_CART:
        draft.push(action.payload);
        break;
      case REMOVE_PRODUCT_CART:
        draft.map(
          ({ productID }) =>
            productID &&
            productID === action.payload.productID &&
            draft.splice(draft.indexOf(action.payload), 1),
        );
        break;
      default:
        return draft;
    }
    return draft;
  });
};
