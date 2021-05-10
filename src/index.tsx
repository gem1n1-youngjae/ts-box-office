import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
