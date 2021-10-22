export const sum = (a: number, b: number) => {
  return {
    type: 'SUM',
    payload: [a, b],
  };
};

export const subtract = (a: number, b: number) => {
  return {
    type: 'SUBTRACT',
    payload: [a, b],
  };
};
