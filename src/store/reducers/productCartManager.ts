import { produce } from 'immer';

import { ActionTypes } from '@store/actions/types';
import { ProductCartManagerActionProps } from '@store/reducers/types';

const { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, PRODUCT_CART_QUANTITY } =
  ActionTypes;

export const productCartManagerReducer = (
  state = [],
  action: ProductCartManagerActionProps,
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_PRODUCT_CART: {
        const product = draft.filter(
          ({ productID }) =>
            productID && productID === action.payload.productID,
        );

        if (product.length > 0) product[0].quantity += 1;
        else draft.push(action.payload);
        break;
      }

      case REMOVE_PRODUCT_CART: {
        draft.forEach(({ productID }, index) => {
          if (productID && productID === action.payload) draft.splice(index, 1);
        });
        break;
      }

      case PRODUCT_CART_QUANTITY: {
        const product = draft.filter(
          ({ productID }) => productID && productID === action.payload[0],
        )[0];

        // eslint-disable-next-line prefer-destructuring
        product.quantity = action.payload[1];
        break;
      }

      default:
        return draft;
    }

    return draft;
  });
};
