import React, { useContext } from 'react'
import { GlobalAuthContext } from './GlobalAuthContext'

const Kids = () => {
    let {user}=useContext(GlobalAuthContext);
  return (
    <div>Kids {user.username}</div>
  )
}

export default Kids