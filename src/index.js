import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reset from "./reset.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App className={reset.scss} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
