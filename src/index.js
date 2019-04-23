import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";

import AppLayout from "./app-layout";

import "./styles.css";
import { func } from "prop-types";

function App() {
  return (
    <div>
      <AppLayout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
