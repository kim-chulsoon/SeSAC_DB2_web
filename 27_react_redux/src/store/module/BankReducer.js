const initialState = 0;

const iNMONEY = "inMoney";
const OUTMONEY = "outMoney";

export const inMoney = (payload) => {
  return { type: iNMONEY, payload: payload };
};

export const outMoney = (payload) => {
  return {
    type: OUTMONEY,
    payload: payload,
  };
};

export const inOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case iNMONEY:
      return state + action.payload;

    case OUTMONEY:
      return state - action.payload;

    default:
      return state;
  }
};
