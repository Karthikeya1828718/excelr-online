import React from 'react'
import { useParams } from 'react-router-dom'

const Womens = () => {
  let{type,color} = useParams();
  return (
    <div>Womens...{type}...{color}</div>
  )
}

export default Womens