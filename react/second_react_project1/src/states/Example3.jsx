import { useState } from "react";
import mobile from "./mobile3.jpg";
import watch from "./watch1.jpg";
const Example3 = () => {
    let[image,setImage]=useState(mobile);
    let change=()=>{
        setImage(watch);
    }
  return (
    <>
      <img src={image} alt=""  width="200px" height="200px"/>
      <br />
      <button onClick={change}>Click</button>
    </>
  );
};
export default Example3;
