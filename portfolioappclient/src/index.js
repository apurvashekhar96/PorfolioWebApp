import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import { NavigationProvider } from "./contexts/Navigation";
import { ScreenSizeContextProvider } from "./contexts/ScreenSize";
import { ModalWindowProvider } from "./contexts/ModalWindow";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ScreenSizeContextProvider>
      <NavigationProvider>
        <ModalWindowProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ModalWindowProvider>
      </NavigationProvider>
    </ScreenSizeContextProvider>
  </Provider>
);
