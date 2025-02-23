import React, { useState } from "react";
import Button from "./Components/Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  return (
    <div className=" bg-gray-100 shadow-md p-4 rounded-lg text-center">
      <h1 className="font-bold border-b border-b-gray-300">Counter</h1>
      <div className="p-4">{count}</div>
      <div className="flex gap-4">
        <Button
          variant="danger"
          size="md"
          className="w-10 h-10"
          onClick={decrementHandler}
        >
          -
        </Button>
        <Button
          variant="primary"
          size="md"
          className="w-10 h-10"
          onClick={incrementHandler}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Counter;
