type ActionProps = {
  type: string;
  payload: number[];
};

export default (state = 0, action: ActionProps) => {
  switch (action.type) {
    case 'SUM':
      return action.payload[0] + action.payload[1];

    case 'SUBTRACT':
      return action.payload[0] - action.payload[1];

    default:
      return state;
  }
};
