import React, { useEffect, useState } from "react";

const Child = () => {
  // componentWillUnmount() {
  //   alert("I will be Unmount");
  // }
  useEffect(() => {
    console.log("Mounted");
    const interval = setInterval(() => {
      console.log("Hello");
    }, 1000);
    return () => {
      // console.log("Unmounted");
      clearInterval(interval);
    };
  }, []);

  return <div>I'm a Child</div>;
};

const ComponentWillUnmount = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <p>{show ? <Child /> : null}</p>
      <button onClick={() => setShow(!show)}>Click me to toggle</button>
    </div>
  );
};

export default ComponentWillUnmount;
