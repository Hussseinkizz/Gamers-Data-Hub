import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./states/clientState/StoreProvider";
import { QueryProvider } from "./states/serverState/QueryProvider";
import "./index.css";
import  "./styles/css/custom.css"; // our custom css, off the tail
import "./assets/fonts/fontStyles.css"; // our custom fonts

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
