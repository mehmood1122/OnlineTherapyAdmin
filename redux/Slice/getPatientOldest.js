import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getPatientOldestApi = createAsyncThunk("getPatientOldestApi",async()=>{

    const baseURL = `https://api.onlinetherapyprofessionals.com/patient?$orderBy=createdAt asc`
    const response = await fetch(baseURL)
    return await response.json()
})
// alert("Mehmood")
const getPatientOldest= createSlice({
    name:"getPatientOldest",
    initialState:{
        isLoading:false,
        isError:false,
        data:null,

    },
    reducers: {
        changePage: (state, action) => {
          state.currentPage = action.payload;
        },
      },
    extraReducers:(builder)=>{
        builder.addCase(getPatientOldestApi.pending,(state,action)=>{
            state.isLoading = true
            state.data =null
        })
        builder.addCase(getPatientOldestApi.fulfilled,(state,action)=>{
            state.data = action.payload.data;
            state.isLoading = false;
            state.isError = false;

        })
        builder.addCase(getPatientOldestApi.rejected,(state,action)=>{
            state.isError = true
        })
    }
})
export const {changePage} = feedbackPaginatedSlice.actions
export default getPatientOldest.reducer