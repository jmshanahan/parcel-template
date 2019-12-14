import React from "react";
import { render } from "react-dom";

import Menu from "./components/Menu";
const wrapper = document.getElementById("app");
const App = () => {
  return (
    <div>
      <h1>Welcome to parcel template</h1>
      <Menu />
    </div>
  );
};
render(<App />, wrapper);
