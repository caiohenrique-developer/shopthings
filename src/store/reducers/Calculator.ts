import { Reducer } from 'react';

import { ActionTypes } from '../actions/types';

type ActionProps = {
  type: string;
  payload: number[];
};

const { SUM, SUB } = ActionTypes;

const initialState = 0;

export const calc: Reducer<number, ActionProps> = (
  state = initialState,
  action: ActionProps,
): number => {
  switch (action.type) {
    case SUM:
      return action.payload[0] + action.payload[1];

    case SUB:
      return action.payload[0] - action.payload[1];

    default:
      return state;
  }
};
