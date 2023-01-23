import React, { Component } from "react";
import axios from "axios";

export default class componentDidMount extends Component {
  constructor() {
    super();
    this.state = {
      todo: {},
    };
  }

  componentDidMount() {
    const API = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/2"
      );
      this.setState({ todo: data });
    };
    API();
  }
  render() {
    const { todo } = this.state;
    console.log(todo);
    return <div>API Call: {todo.title}</div>;
  }
}
