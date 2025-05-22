import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../users/UsersSlice';

const UsersList = () => {
    let dispatch=useDispatch();
    let {users,status,error}=  useSelector((state) => state.users)
   
   
    useEffect(
        ()=>{
        if(status==='idle'){
            dispatch(fetchUsers())
        }
        },[status,dispatch]
    );



    if(status==='loading'){
        return <div>Loading...</div>
    }
    if(status==='failed'){
        return <div style={{color:'red'}}>{error}</div>
    }
    return (
    <div>
        <h2>Users List</h2>
        <ul>
            {users.map((user)=><li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
  )
}
export default UsersList