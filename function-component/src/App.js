import React, { useState, useEffect } from "react";
import "./App.css";
import ComponentWillMount from "./components/componentWillMount";
import ComponentDidMount from "./components/componentDidMount";
import ComponentDidUpdate from "./components/componentDidUpdate";
import ComponentWillUnmount from "./components/componentWillUnmount";

function App() {
  return (
    <div className="App">
      {/* <ComponentWillMount />
      <ComponentDidMount />
      <ComponentDidUpdate /> */}
      <ComponentWillUnmount />
    </div>
  );
}

export default App;
