//counter app
import { useState } from "react";
const Example2 = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};
export default Example2;
