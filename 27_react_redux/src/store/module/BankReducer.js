const initialState = 0;

export const inMoney = (ref) => {
  return { type: "inMoney", ref };
};

export const outMoney = (ref) => {
  return { type: "outMoney", ref };
};

export const inOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "inMoney":
      return state + action.ref;

    case "outMoney":
      return state - action.ref;

    default:
      return state;
  }
};
