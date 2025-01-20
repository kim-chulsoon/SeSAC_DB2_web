import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer: reducer });

function reducer(numberState = 1, action) {
  console.log(action);
  if (action.type === "증가") {
    return numberState + 1;
  } else if (action.type === "감소") {
    return numberState - 1;
  } else {
    return numberState;
  }
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
