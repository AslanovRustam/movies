import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { moviesSearchFetch } from "../../services/api";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import SearchBar from "../../components/SearchBar/SearchBar";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    }

    setSearchParams(query !== "" ? { query } : {});
    setQuery("");
  };

  useEffect(() => {
    const query = searchParams.get("query") ?? "";

    if (!query) {
      return;
    }

    (async () => {
      try {
        const data = await moviesSearchFetch(query);

        if (data.length === 0) {
          return;
        }

        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchParams, movies.length]);

  return (
    <>
      <SearchBar
        value={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
