import React, { Component } from "react";

export default class componentWillUnmount extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.show ? <Child /> : null}</p>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Click me to toggle
        </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("I will be Unmount");
  }
  render() {
    return <div>I'm a Child</div>;
  }
}
