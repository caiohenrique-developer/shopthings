import { SelectedProduct } from '@store/actions/types';

export type ProductCartManagerActionProps = {
  type: string;
  payload: SelectedProduct | number;
};
