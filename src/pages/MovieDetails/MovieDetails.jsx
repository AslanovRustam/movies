import { useEffect, useState, useRef, Suspense } from "react";
import { useParams, Outlet, useLocation, NavLink } from "react-router-dom";
import { moviesDetailsFetch } from "../../services/api";
import s from "./movieDetails.module.css";
import AboutMovie from "../../components/AboutMovie/AboutMovie";
import { Loader } from "../../components/Loader/Loader";

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? "/");

  useEffect(() => {
    moviesDetailsFetch(movieId).then((data) => setMovies(data));
  }, [movieId]);

  return (
    <>
      <NavLink to={backLinkLocation.current}>Go back</NavLink>

      {movies && <AboutMovie movies={movies} />}

      <div className={s.wrapper}>
        <p className={s.text}>Additional information:</p>
        <ul className={s.list}>
          <li>
            <NavLink
              to="cast"
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
