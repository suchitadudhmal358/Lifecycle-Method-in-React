import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ComponentWillMount = () => {
  const [todo, setTodo] = useState(true);

  if (todo) {
    //componetWillMount code go here
    console.log("HEllo");
  }

  useEffect(() => {
    //componetDidMount code go here
    console.log(todo);
    setTodo(false);
    console.log(todo);
  }, []);

  return (
    <div>
      <p>{todo ? "True" : "False"}</p>
    </div>
  );
};

export default ComponentWillMount;
