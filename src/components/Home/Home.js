import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/loading";
import { fetchMovies } from "../../Features/movies/moviesSlice";
export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.movies.isLoading)
  useEffect(() => {
    if(isLoading){
      dispatch(fetchMovies())
    }
  }, [dispatch , isLoading]);
  return (
    <div>
      {isLoading ? <Loading /> :<MovieListing /> }
    </div>
  );
}
