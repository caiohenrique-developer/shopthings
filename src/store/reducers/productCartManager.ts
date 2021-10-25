import { produce } from 'immer';

import { ActionTypes } from '@store/actions/types';

import { ProductCartManagerActionProps } from './types';

const { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART } = ActionTypes;

export const productCartManagerReducer = (
  state = [],
  action: ProductCartManagerActionProps,
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_PRODUCT_CART:
        draft.push(action.payload);
        break;

      case REMOVE_PRODUCT_CART:
        draft.forEach(
          ({ productID }) =>
            productID &&
            productID === action.payload &&
            draft.splice(draft.indexOf(action.payload), 1),
        );
        break;

      default:
        return draft;
    }

    return draft;
  });
};
