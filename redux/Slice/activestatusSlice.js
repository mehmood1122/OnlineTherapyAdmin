import { createSlice } from "@reduxjs/toolkit";
// export const activestatusApi = 
const activestatusSlice = createSlice({
    name:"activestatusSlice",
    initialState:{
        isActive:null
    },
    reducers:{
        activeStatus :(state,action)=>{
            state.isActive = true
        },
        inActiveStatus :(state,action)=>{
            state.isActive = false
        }
    }

})
export const {activeStatus,inActiveStatus} = activestatusSlice.actions 
 export default activestatusSlice.reducer 