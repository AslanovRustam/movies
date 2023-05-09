import { Link, useLocation } from "react-router-dom";
import s from "./moviesItem.module.css";
import noPoster from "../../images/no_poster.png";

export const MoviesItem = ({ id, title, poster, vote }) => {
  const rating = vote.toFixed(1);
  const location = useLocation();

  return (
    <li className={s.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          className={s.image}
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster}
          alt={title}
        />
        <div className={s.info}>
          <h2 className={s.title}>{title}</h2>
          <span className={s.vote}>{rating}</span>
        </div>
      </Link>
    </li>
  );
};
