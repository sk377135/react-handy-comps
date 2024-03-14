import { useState } from "react";
const useCounter = () => {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return { count, increament, decrement };
};
export { useCounter };
