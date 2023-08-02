import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const feedbackPaginatedApi = createAsyncThunk("feedbackPaginatedApi",async(num)=>{
    const baseURL = `https://api.onlinetherapyprofessionals.com/feedback/?$rpp=3&$page=${num}`
    const response = await fetch(baseURL)
    return await response.json()
})
// alert("Mehmood")
const feedbackPaginatedSlice= createSlice({
    name:"feedbackPaginatedSlice",
    initialState:{
        isLoading:false,
        isError:false,
        data:null,
        currentPage: 1,
        totalPages: 0,
    },
    reducers: {
        changePage: (state, action) => {
          state.currentPage = action.payload;
        },
      },
    extraReducers:(builder)=>{
        builder.addCase(feedbackPaginatedApi.pending,(state,action)=>{
            state.isLoading = true
            state.data =null
        })
        builder.addCase(feedbackPaginatedApi.fulfilled,(state,action)=>{
            state.data = action.payload.data;
            state.isLoading = false;
            state.isError = false;
            state.totalPages = action.payload.totalPages 
        })
        builder.addCase(feedbackPaginatedApi.rejected,(state,action)=>{
            state.isError = true
        })
    }
})
export const {changePage} = feedbackPaginatedSlice.actions
export default feedbackPaginatedSlice.reducer