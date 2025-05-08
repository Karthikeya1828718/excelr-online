import React, { useRef } from 'react'

const UnControlled = () => {
  let name=useRef(null);
  let handleSubmit=(e)=>{
    e.preventDefault()
   console.log(name.current.value);
  }
  return (
   <>
    <form  onSubmit={handleSubmit}>

        <input type="text"  ref={name}/>
        <button >Submit</button>
    </form>
   </>
  )
}

export default UnControlled