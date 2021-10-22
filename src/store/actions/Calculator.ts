import { ActionTypes } from './types';

const { SUM, SUB } = ActionTypes;

export const sum = (a: number, b: number) => {
  return {
    type: SUM,
    payload: [a, b],
  };
};

export const sub = (a: number, b: number) => {
  return {
    type: SUB,
    payload: [a, b],
  };
};
