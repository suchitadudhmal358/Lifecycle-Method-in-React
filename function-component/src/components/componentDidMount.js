import React, { useState, useEffect } from "react";
import axios from "axios";

const ComponentDidMount = () => {
  const [todo, setTodo] = useState({});

  // componentDidMount() {
  //   const API = async () => {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/todos/2"
  //     );
  //     this.setState({ todo: data });
  //   };
  //   API();
  // }

  useEffect(() => {
    const API = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/2"
      );
      setTodo(data);
    };
    API();
  }, []);
  console.log(todo);
  return <div>API Call: {todo.title}</div>;
};

export default ComponentDidMount;
