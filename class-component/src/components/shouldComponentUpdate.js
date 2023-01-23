import React, { Component } from "react";

export default class shouldComponentUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "shouldComponentUpdate()",
    };
  }
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "componentDidMount" });
    }, 200);
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}
