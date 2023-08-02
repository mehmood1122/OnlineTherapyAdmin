import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const forgotEmailOtpApi = createAsyncThunk("forgotEmailOtpApi",async(body)=>{
    const baseURL = `https://api.onlinetherapyprofessionals.com/system-user/forgot-password/otp`
    const response = await fetch(baseURL,{
        method:'post',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body)
    })

    return await response.json()
})
const forgotEmailOtp = createSlice({
    name:"forgotEmailOtp",
    initialState:{
        isLoading:false,
        data:null,
        isError : false,
        status:null
    },
    reducers:{
        forgotEmailOtpClear:(state,action)=>{
            state.data = null;
            state.isLoading = false;
            state.isError = false;
        }
    },
extraReducers:(builder)=>{
    builder.addCase(forgotEmailOtpApi.pending,(state,action)=>{
        state.isLoading = true;
        state.data = null;
        state.isError = true
    })
    builder.addCase(forgotEmailOtpApi.fulfilled,(state,action)=>{
        state.data = action.payload.data
        state.status = action.payload.status
        state.isLoading = false;
        state.isError = false
    })
    builder.addCase(forgotEmailOtpApi.rejected,(state,action)=>{
        state.isError = true
        state.isLoading = true
    })
}
})
export const {forgotEmailOtpClear}  = forgotEmailOtp.actions
export default forgotEmailOtp.reducer