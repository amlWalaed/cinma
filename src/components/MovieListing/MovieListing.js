import React from "react";
import "./movieListing.scss";
import responsive from "../responsiveSlider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import MoveCard from "../MovieCard/MovieCard";
export default function MoveListing() {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector(
    (state) => state.movies.popularMovies
  );
  const topRelatedMovies = useSelector(
    (state) => state.movies.topRelatedMovies
  );
  const upComingMovies = useSelector(
    (state) => state.movies.upComingMovies
  );
  return (
    <div className="container">
      <div className="section">
        <header> Now Playing Movies</header>
        <Carousel responsive={responsive}>
          {nowPlayingMovies.results.map((movie) => (
            <MoveCard props={movie} key={movie.id} />
          ))}
        </Carousel>
      </div>
      <div className="section">
        <header> Popular Movies </header>
        <Carousel responsive={responsive}>
          {popularMovies.results.map((movie) => (
            <MoveCard props={movie} key={movie.id} />
          ))}
        </Carousel>
      </div>
      <div className="section">
        <header> Top Related Movies</header>
        <Carousel responsive={responsive}>
          {topRelatedMovies.results.map((movie) => (
            <MoveCard props={movie} key={movie.id} />
          ))}
        </Carousel>
      </div>
      <div className="section">
        <header> upComing Movies</header>
        <Carousel responsive={responsive}>
          {upComingMovies.results.map((movie) => (
            <MoveCard props={movie} key={movie.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
