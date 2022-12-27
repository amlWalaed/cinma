import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios , {keyAPI} from "../../common/api/axios";
import types from "./types";
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    try{
        const data = {}
        for (let type in types){
            const response =await axios.get(`movie/${types[type]}?api_key=${keyAPI}&language=en-US&page=1`).catch(rej => rej)
            data[type] = response.data
        }
        return data
    }catch (err){
        return err.message
        
    }
})
export const fetchMovieDetails = createAsyncThunk('movie/fetchMovie' , async (id) =>{
    const response =await axios.get(`movie/${id}?api_key=${keyAPI}&language=en-US`)
    const keywords = await axios.get(`movie/${id}/keywords?api_key=${keyAPI}`).then(res => res.data.keywords)
    const cast = await axios.get(`movie/${id}/credits?api_key=${keyAPI}&language=en-US`).then( res => res.data.cast)
    const similarMovies = await axios.get(`movie/${id}/similar?api_key=${keyAPI}&language=en-US&page=1`).then( res => res.data)
    return {
        keywords: keywords,
        movieDetails: response.data,
        cast:cast.slice(0,9),
        similarMovies:similarMovies.results
    }
})
const moviesSlice = createSlice({
    name: 'Movies',
    initialState:{
        isLoading:true,
        isLoadingDetails:true,
        errors:[],
        nowPlayingMovies:[],
        popularMovies:[],
        topRelatedMovies:[],
        upComingMovies:[],
        movieDetails:{},
        keywords:[],
        cast:[],
        similarMovies:[]
    },
    extraReducers(builder){
        builder.addCase(fetchMovies.pending , (state)=>{
            state.isLoading = true
        }).addCase(fetchMovies.fulfilled , (state ,{payload})=>{
            state.nowPlayingMovies = payload.NOW_PLAYING
            state.popularMovies = payload.POPULAR
            state.topRelatedMovies = payload.TOP_RATED
            state.upComingMovies = payload.UPCOMING
            state.isLoading = false
        }).addCase(fetchMovies.rejected , (state ,action) => {
            console.log(action.payload)
            state.errors = action.payload
        });
        builder.addCase(fetchMovieDetails.pending, (state)=>{
            state.isLoadingDetails = true
        }).addCase(fetchMovieDetails.fulfilled , (state,{payload}) => {
            state.movieDetails = payload.movieDetails
            state.keywords = payload.keywords
            state.cast = payload.cast
            state.similarMovies = payload.similarMovies
            state.isLoadingDetails = false
        }).addCase(fetchMovieDetails.rejected, (state,{payload})=>{
            console.log(payload)
            state.errors = payload
        })
    }
})
export default moviesSlice.reducer;