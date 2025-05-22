import usersReducer from '../users/UsersSlice'
import productsReducer from '../users/ProductsSlice'
import { configureStore } from '@reduxjs/toolkit'
let store=configureStore({
    reducer:{
        users:usersReducer,
        products:productsReducer
    }
})
export default store
