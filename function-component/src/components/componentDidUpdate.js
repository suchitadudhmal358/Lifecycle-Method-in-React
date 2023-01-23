import React, { useState, useEffect } from "react";

const ComponentDidUpdate = () => {
  const [name, setName] = useState("Welcome");

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ name: "componentDidMount" });
  //   }, 500);
  // }

  // componentDidUpdate(prevState) {
  //   if (prevState.name !== this.state.name) {
  //     document.getElementById("name").innerHTML = "state changed";
  //   }
  // }

  useEffect(() => {
    setTimeout(() => {
      setName("componentDidMount");
    }, 5000);
    document.getElementById("name").innerHTML = "State changed";
  }, [name]);

  return <div id="name"> {name}</div>;
};

export default ComponentDidUpdate;
