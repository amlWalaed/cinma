import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name:"genres",
    initialState:{
        genres:[], 
    },
    reducers:{
        fetchGenres:(state , {payload})=>{
            state.genres = payload
        }
    }
})
export const {fetchGenres} = genresSlice.actions
export default genresSlice.reducer