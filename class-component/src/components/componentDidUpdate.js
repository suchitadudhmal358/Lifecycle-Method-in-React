import React, { Component } from "react";

export default class componentDidUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "shouldComponentUpdate()",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "componentDidMount" });
    }, 500);
  }

  componentDidUpdate(prevState) {
    if (prevState.name !== this.state.name) {
      document.getElementById("name").innerHTML = "state changed";
    }
  }
  render() {
    return <div id="name"> {this.state.name}</div>;
  }
}
