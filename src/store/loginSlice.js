import {createSlice} from "@reduxjs/toolkit"


// here i am creating a reducer and actions it will 
//act as a single source of truth 
//and will help us in state management 
const initialState={
    // this keeps whether the user is logged in or not 
    status:false, 
    userData:null
}

const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload;
        },
        logout:(state,action)=>{
            state.status=false;
            state.userData=null
        }
    }
})

export const {login,logout} = authSlice
export default authSlice.reducer;