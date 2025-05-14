// import React from 'react'
// import { useState } from 'react';

// const UseReducerExample = () => {
//     let [count, setCount] = useState(0);
//   return (
//     <>
//     <button onClick={()=>setCount(count+1)} className='btn btn-outline-success'>+</button>
//     <span>{count}</span>
//     <button onClick={()=>setCount(count-1)} className='btn btn-outline-danger'>-</button>
//     </>
//   )
// }

// export default UseReducerExample

import React from "react";
import { useReducer } from "react";

const UseReducerExample = () => {
  let initialValue = {
    count: 0,
  };

  let reducer = (state, action) => {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    } else if (action.type === "decrement") {
      return { count: state.count - 1 };
    }
    return state;
  };
  let [state, dispatch] = useReducer(reducer, initialValue);
  let { count } = state;
  return (
    <>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-outline-success"
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-outline-danger"
      >
        -
      </button>
    </>
  );
};

export default UseReducerExample;
