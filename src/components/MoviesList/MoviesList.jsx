import { PropTypes } from "prop-types";
import s from "./moviesList.module.css";

import { MoviesItem } from "../MoviesItem/MoviesItem";

const MoviesList = ({ movies }) => {
  return (
    <>
      <ul className={s.list}>
        {movies.map(({ id, title, poster_path, vote_average }) => {
          return (
            <MoviesItem
              key={id}
              id={id}
              title={title}
              poster={poster_path}
              vote={vote_average}
            />
          );
        })}
      </ul>
    </>
  );
};

export { MoviesList };

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
