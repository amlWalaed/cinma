import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./movieCard.scss";
export default function MoveCard({ props }) {
  const [movie] = useState(props);
  const genres = useSelector((state) => state.genresReducer.genres);

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="poster"
      />
      <div className="movie-info">
        <h2>
          <span>{movie.title}</span>
          <span>{movie.release_date}</span>
        </h2>
        <div className="types">
          {genres
            .filter((gen) => movie.genre_ids.includes(gen.id))
            .map((gen) => (
              <span>{gen.name} , </span>
            ))}
        </div>
        <div className="vote">
          <span className="vote_count">
            <span>vote count:</span>
            <span>{movie.vote_count} ,</span>
          </span>
          <span className="vote_average">
            <span>vote average: </span>
            <span>{movie.vote_average} ,</span>
          </span>
          <span className="popularity">
            <span>popularity:</span>
            <span>{movie.popularity} ,</span>
          </span>
        </div>
        <Link to={`/movie/${movie.id}`}>Show Details</Link>
      </div>
    </div>
  );
}
