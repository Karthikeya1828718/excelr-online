import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



//promises- pending, fulfilled, rejected


//  export const fetchUsers=async(dispatch)=>{
//     dispatch({type:'fetch_start'})
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const userdata=await response.json()
//         dispatch({type:'fetch_success',payload:userdata})
//     }
//     catch(error){
//         dispatch({type:'fetch_error',payload:error.message})
//     }
//  }


//createAsyncThunk is a function that creates an action creator for async actions
// It takes two arguments: a string action type and a function that returns a promise
//it automatically dispatches the pending, fulfilled, and rejected actions for you


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}
     
);

const userSlice=createSlice({
     name: 'users',
     initialState:{
        users:[],
        status: 'idle', // idle, loading, succeeded, failed
        /*
        idle: initial state , nothing happened yet
        loading: request is being made
        succeeded: request is successful
        failed: request failed
        */
        error: null
     },
     reducers:{},
     extraReducers:(builder)=>{
            builder
            .addCase(fetchUsers.pending,(state,action)=>{
                state.status='loading';
            })
            .addCase(fetchUsers.fulfilled,(state,action)=>{
                state.status='succeeded';
                state.users=action.payload
            })
            .addCase(fetchUsers.rejected,(state,action)=>{
                state.status='failed';
                state.error=action.error.message
            })

     }
})

export default userSlice.reducer;