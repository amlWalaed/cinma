import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movies/moviesSlice";
import genresSlice from "./genres/genresSlice";
import authentication from "./authentication/authenticationSlice";
const store = configureStore({
    reducer:{
       movies : moviesSlice,
       genresReducer : genresSlice,
       authentication : authentication
    }
})
export default store;