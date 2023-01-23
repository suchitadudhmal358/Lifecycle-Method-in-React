import React, { useEffect } from "react";
const Child = () => {
  // componentWillUnmount() {
  //   alert("I will be Unmount");
  // }
  useEffect(() => {
    return () => {
      console.log(
        "Behavior right before the component is removed from the DOM."
      );
    };
  }, []);

  return <h1> Hello World! </h1>;
};

export default Child;
