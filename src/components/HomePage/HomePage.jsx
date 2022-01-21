import { useState, useEffect } from "react";
//import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { fetchPopular } from "../../services/api";
import MoviesView from "../MoviesView/MoviesView";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);

  const onLoadMoreClick = () => {
    setPage((s) => s + 1);
  };

  useEffect(() => {
    fetchPopular(page).then((data) =>
      setPopularMovies((state) => [...state, ...data.results])
    );
  }, [page]);
  return <MoviesView movies={popularMovies} onClick={onLoadMoreClick} />;
};
export default Popular;
