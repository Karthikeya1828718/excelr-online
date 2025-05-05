import React from "react";
const Parent4 = () => {
  let greet = () => {
    alert("welcome to react");
  };
  return (
    <>
      <div>Parent4</div>
      <Child4 func={greet} />
    </>
  );
};
const Child4 = (props) => {
  return (
    <>
      <div>Child4</div>
      <button onClick={props.func}>click</button>
    </>
  );
};
export default Parent4;
