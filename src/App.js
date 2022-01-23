import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Suspense, lazy } from "react";

const LazyHomePage = lazy(() => import("./components/HomePage/HomePage.jsx"));
const LazyMovies = lazy(() => import("./components/Movies/Movies.jsx"));
const LazyMovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage.jsx")
);
const LazyCast = lazy(() => import("./components/Cast/Cast"));
const LazyReviews = lazy(() => import("./components/Reviews/Reviews"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LazyHomePage />} />
          <Route path="/:movieId" element={<LazyMovieDetailsPage />}>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Route>
          <Route path="movies" element={<LazyMovies />} />
          <Route path="movies/:movieId" element={<LazyMovieDetailsPage />}>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Route>
          <Route path="*" element={<LazyHomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
