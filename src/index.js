import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
