import { configureStore } from "@reduxjs/toolkit"
import authReducer from './loginSlice'

//lets make a store by revisiong , this store will essentially used to keep the track of the 
//the login session and user track 
// here we need to 

const store=configureStore({
    reducer:{
        auth:authReducer
    }
})

export default store