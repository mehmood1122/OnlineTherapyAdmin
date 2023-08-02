import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const createtherapistApi = createAsyncThunk("createtherapistApi",async(body)=>{
    // const baseUrl = `https://api.onlinetherapyprofessionals.com/therapists`
    const baseURL = `https://api.onlinetherapyprofessionals.com/therapists/signup`
    const response = await fetch(baseURL,{
        method:'post',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body)
    });
    return await response.json()
})
const createtherapistSlice = createSlice({
    name:"createtherapistSlice",
    initialState:{
        isLoading:false,
        isError: false,
        data:null,
        message:null,
        status:null,
    },
    reducers:{
        createtherapistClear:(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.data = null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createtherapistApi.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(createtherapistApi.fulfilled,(state,action)=>{
            state.data = action.payload.data
            state.isError = false
            state.isLoading = false
            state.message = action.payload.message
            state.status =action.payload.status
        })
        builder.addCase(createtherapistApi.rejected,(state,action)=>{
            state.isError = true;
        })
    }
})

export const  {createtherapistClear} =  createtherapistSlice.actions
export default createtherapistSlice.reducer
