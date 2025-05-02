import React from 'react'
import Child from './Child';

const Parent4 = () => {
    let greet = () =>{
        alert("Welcome to React");
    }
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
        <button onClick={props.func}>Click Me</button>
        </>
    );
};

export default Parent4;