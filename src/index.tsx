import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./assets/App.css";
import store from "./redux/store";

import { languageContext, languages } from "./config/language";

// component
import App from "./view/App";

const currentLanguage = 'en';
const language = languages[currentLanguage];

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <languageContext.Provider value={{ languageContext: language }}>
      <App />
      </languageContext.Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
