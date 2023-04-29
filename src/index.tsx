import React from "react";
import ReactDOM from "react-dom/client";

// additional package require for react-redux to work with typescript: npm i --save-dev @types/react-redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// as - type assertion
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
