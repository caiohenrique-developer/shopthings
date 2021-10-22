import { Reducer } from 'react';

type ActionProps = {
  type: string;
  payload: number[];
};

const initialState = 0;

export const calc: Reducer<number, ActionProps> = (
  state = initialState,
  action: ActionProps,
): number => {
  switch (action.type) {
    case 'SUM':
      return action.payload[0] + action.payload[1];

    case 'SUBTRACT':
      return action.payload[0] - action.payload[1];

    default:
      return state;
  }
};
