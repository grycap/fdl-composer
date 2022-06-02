import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Foot } from "./Footer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Foot />, document.getElementById("footer"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
