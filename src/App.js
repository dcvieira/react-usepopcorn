import Navbar from "./Navbar";
import Main from "./Main";
import Search from "./Search";
import NumResults from "./NumResults";
import Box from "./Box";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";

const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e2300694";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`${BASE_URL}&s=batman`);
      const data = await response.json();
      setMovies(data.Search);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
