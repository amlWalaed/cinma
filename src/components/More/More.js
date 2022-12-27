import { useLocation } from "react-router-dom";
import MoveCard from "../MovieCard/MovieCard";
import './more.scss'
const More = () => {
  const location = useLocation();
  const movies = location.state;
  return (
    <div className="container">
      <div className="movies">
        {movies.map((movie) => (
          <MoveCard props={movie} />
        ))}
      </div>
    </div>
  );
};

export default More;
