import React from 'react'
import { useParams } from 'react-router-dom'

const Mens = () => {
    let {type}= useParams();
  return (
    <div>Mens ... loading ....{type}</div>
  )
}

export default Mens