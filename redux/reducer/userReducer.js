import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    isUserLoggedin: false,
    header: true
}
const userReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase('LOGIN',(state,action)=>{
        return {
            ...state,
            isUserLoggedin: action.payload.isUserLoggedin,
        }
    })
    .addCase('LOGOUT',(state,action)=>{
        return{
            ...state,
            isUserLoggedin: false,
        }
    })
    .addCase('CONTROLSIDEBAR',(state,action)=>{
        return{
            ...state,
            header: action.payload
        }
    })
})
export default userReducer;