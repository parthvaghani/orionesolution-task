import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  body: {
    fontFamily: "$body",
    backgroundColor: "$background",
    color: "$textPrimary",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "*": { boxSizing: "inherit" },
});

globalStyles();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
