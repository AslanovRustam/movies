import noPoster from "../../images/no_poster.png";
import s from "./about.module.css";

const AboutMovie = ({ movies }) => {
  const {
    poster_path: poster,
    backdrop_path: backdrop,
    title,
    release_date: date,
    original_title: originalTitle,
    vote_average: vote,
    vote_count: votes,
    popularity,
    overview: about,
    genres,
  } = movies;

  return (
    <div className={s.movieContainer}>
      <img
        className={s.poster}
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster}
        alt={title}
      />
      <ul>
        <li>
          <h2 className={s.title}>
            {title} ({date.slice(0, 4)})
          </h2>
        </li>
        <li>
          <p className={s.vote}>
            Vote/Votes: <span>{vote.toFixed(1)}</span>/<span>{votes}</span>
          </p>
        </li>
        <li>
          <p className={s.subTitle}>
            <b>Original Title: </b> <span>{originalTitle}</span>
          </p>
        </li>
        <li>
          <p className={s.subTitle}>
            <b>Popularity: </b>
            <span>{popularity.toFixed(1)}</span>
          </p>
        </li>
        <li>
          <p className={s.subTitle}>
            <b>Genre: </b>
            <span>{genres.map((genre) => genre.name).join(", ")}</span>
          </p>
        </li>
        <li>
          <p className={s.about}>About</p>
          <p className={s.text}>
            <span>{about}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutMovie;
