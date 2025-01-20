// store/index.js -> 여러 reducer를 통합하는 역할

import { combineReducers } from "@reduxjs/toolkit";
import { isDataReducer } from "./module/IsDataReducer";
import { counterReducer } from "./module/CounterReducer";
import { inOutReducer } from "./module/BankReducer";

const rootReducer = combineReducers({
  isData: isDataReducer,
  count: counterReducer,
  inOut: inOutReducer,
});

export default rootReducer;
