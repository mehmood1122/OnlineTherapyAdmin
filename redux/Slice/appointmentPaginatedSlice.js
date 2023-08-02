import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const appointmentPaginatedApi = createAsyncThunk("appointmentPaginatedApi", async (num) => {
    const baseURL = `https://api.onlinetherapyprofessionals.com/appointments?$rpp=3&$page=${num}`
    const responce = await fetch(baseURL)
    return await responce.json()
})
const appointmentPaginatedSlice = createSlice({
    name: "appointmentPaginatedSlice",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        currentPage: 1,
        totalPages: 0,

        
    },
    reducers: {
        changePage: (state, action) => {
          state.currentPage = action.payload;
        },
      },
    extraReducers: (builder) => {
        builder.addCase(appointmentPaginatedApi.pending,(state,action) => {
            state.isLoading = true
            state.data = null

        })
        builder.addCase(appointmentPaginatedApi.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data=action.payload.data
            state.totalPages = action.payload.totalPages 
        })

        builder.addCase(appointmentPaginatedApi.rejected,(state , action)=>{
            state.isError = true
            state.data = null
        })

    }

})
export const {changePage} = appointmentPaginatedSlice.actions
export default appointmentPaginatedSlice.reducer