import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const changePasswordApi = createAsyncThunk("changePasswordApi",async(body)=>{
const baseURL = `https://api.onlinetherapyprofessionals.com/system-user/forgot-password`
const response = await fetch(baseURL,{
    method:'post',
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(body)
})
return await response.json()
})
const changePassword = createSlice({
    name:"changePassword",
    initialState:{
        isLoading:false,
        data: null,
        isError:false,
        status:null,
        message:null
    },
    extraReducers:(builder)=>{
        builder.addCase(changePasswordApi.pending,(state,action)=>{
            state.isLoading = true;
            state.data = null;
            state.isError = true
        })

        builder.addCase(changePasswordApi.fulfilled,(state,action)=>{
            state.data = action.payload.data;
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message
            state.isError = false;

        })
        builder.addCase(changePasswordApi.rejected,(state,action)=>{
            state.isError = true
        })
    }
})

export default changePassword.reducer