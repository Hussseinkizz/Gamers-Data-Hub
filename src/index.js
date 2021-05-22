import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./states/clientState/StoreProvider";
import { QueryProvider } from "./states/serverState/QueryProvider";
import "./index.css"; // main css, some compilation from tailwind directives
import  "./styles/css/custom.css"; // our custom css, off tailwind
import "./assets/fonts/fontStyles.css"; // our custom fonts
import "./assets/libraries/hover-min.css" // css helper lib
import "./assets/libraries/font-awesome-animation.min.css" // css helper lib
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
