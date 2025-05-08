import React, { useState } from 'react'

const EventTask2 = () => {
  let [isHovered,setIsHovered]=useState(false);
  let style={
    backgroundColor:isHovered?"black":"yellow",
    border:"2px solid black",
    width:"700px",
    fontSize:"40px",
    textAlign:"center",
    color:isHovered?"white":"red" 
  }
  return (
    <div 
    style={style} 
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >EventTask2</div>
  )
}

export default EventTask2