import React from "react";
import ReactDOM from "react-dom";
import "popper.js";
import "popper.js/dist/popper";
import "bootstrap-scss/bootstrap.scss";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
