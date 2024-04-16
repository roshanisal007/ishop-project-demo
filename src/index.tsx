import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductsComponent from "./components/ProductsComponent";
import DemoIndexComponent from "./DemoApp/DemoIndexComponent";
import IshopIndexComponent from "./ishop/IshopIndexComponent";
import { Provider } from "react-redux";
import store from "./ishop/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IshopIndexComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
