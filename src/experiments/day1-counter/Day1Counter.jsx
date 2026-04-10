import { useState } from "react";

function Day1Counter() {
  console.log("Component rendered");

  const [count, setCount] = useState(0);
  console.log("count value:", count);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Day1Counter;