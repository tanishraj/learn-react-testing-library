import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counter Example</h1>

      <h2>{count}</h2>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};

export default Counter;
