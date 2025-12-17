"use client";

import { useState } from "react";

const useCounter = (min = -10, max = 10) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => (prev < max ? prev + 1 : prev));
  };

  const decrement = () => {
    setCount((prev) => (prev > min ? prev - 1 : prev));
  };

  const reset = () => {
    setCount(0);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    min,
    max,
  };
};

export default useCounter;
