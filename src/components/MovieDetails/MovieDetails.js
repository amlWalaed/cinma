import "./movieDetails.scss";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../Features/movies/moviesSlice";
import responsive from "../responsiveSlider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MoveCard from "../MovieCard/MovieCard";
import Loading from "../loading/loading";
import Cast from "./cast/Cast";
import { Link } from "react-router-dom";
export default function MoveDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieDetails);
  const keywords = useSelector((state) => state.movies.keywords);
  const cast = useSelector((state) => state.movies.cast);
  const similarMovies = useSelector((state) => state.movies.similarMovies);
  const isLoadingDetails = useSelector(
    (state) => state.movies.isLoadingDetails
  );

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);
  return (
    <div className="container">
      {isLoadingDetails ? (
        <Loading />
      ) : (
        <div>
          <div className="movieDetails">
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="movie-info">
              <h1 className="title">{movie.title}</h1>
              <div className="box">
                <div className="genres">
                  <span className="types">
                    <span className="special-font">types: </span>
                  </span>
                  {movie.genres.map((genre) => (
                    <span key={genre.id}>{genre.name} ,</span>
                  ))}
                </div>
                <div className="status">
                  <span className="special-font">{movie.status}</span>
                </div>
                <div className="adult">
                  <span className="special-font">adult: </span>
                  {movie.adult ? <span> +18</span> : <span> No</span>}
                </div>
              </div>
              <div className="production_companies">
                <header>production companies</header>
                {movie.production_companies.map((company) => {
                  return (
                    <div className="company-info" key={company.id}>
                      {company.logo_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                          alt={company.name}
                          className="company-logo"
                        />
                      ) : (
                        ""
                      )}

                      <span className="company-name">{company.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="overview">{movie.overview}</div>

              <a href={movie.homepage}>more details</a>
              <div className="keywords">
                {keywords.map((keyword) => (
                  <span key={keyword.id}>{keyword.name}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="actors-container">
            <header>Actors</header>
            <div className="actors-photos">
              {cast.map((actor) => (
                <Cast actor={actor} key={actor.id} />
              ))}
            </div>
          </div>
          <div className="similar-movies">
            <header>Similar Movies</header>
            <Carousel responsive={responsive}>
              {similarMovies.map((movie) => (
                <MoveCard props={movie} key={movie.id} />
              ))}
              <Link to="/More" state={similarMovies}>more</Link>
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
