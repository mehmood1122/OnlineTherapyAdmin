import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const forgotOtpVerifyApi = createAsyncThunk("forgotOtpVerifyApi",async(body)=>{
    const baseURL = `https://api.onlinetherapyprofessionals.com/system-user/forgot-password/verify-otp`
    const response = await fetch(baseURL,{
        method:'post',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body)
    })
    return await response.json()
})
const forgotOtpVerify = createSlice({
name:"forgotOtpVerify",
initialState:{
    isLoading:false,
    isError:false,
    data:null,
    status:null
},
reducers:{
    forgotOtpVerifyClear:(state,action)=>{
        state.isLoading = false;
        state.isError = false;
        state.data = null;
        state.status = null
    }
},
extraReducers:(builder)=>{
    builder.addCase(forgotOtpVerifyApi.pending,(state,action)=>{
        state.isLoading = true;
        state.data = null;
    })
    builder.addCase(forgotOtpVerifyApi.fulfilled,(state,action)=>{
        state.isLoading = false
        state.data= action.payload.data
        state.isError = false
        state.status = action.payload.status
    })
    builder.addCase(forgotOtpVerifyApi.rejected,(state,action)=>{
        state.isError = true
    })
}
})
export const {forgotOtpVerifyClear} = forgotOtpVerify.actions
export default forgotOtpVerify.reducer