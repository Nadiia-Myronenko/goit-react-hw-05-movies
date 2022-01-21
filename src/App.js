import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage.jsx";
import Movies from "./components/Movies/Movies.jsx";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage.jsx";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";

const NotFound = () => {
  return <h1>NotFound</h1>;
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
//    <Route path="cast" element={<Cast />} />
