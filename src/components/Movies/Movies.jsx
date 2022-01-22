import { useState, useEffect } from "react";
import { Message } from "../Message.styled";
import Searchbar from "../Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";
import { fetchMovies } from "../../services/api";
import MoviesView from "../MoviesView/MoviesView";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const [allLoaded, setAllLoaded] = useState(false);

  const handleFormSubmit = (keyWord) => {
    setKeyWord(keyWord);
    setPage(1);
    setMovies([]);
    setAllLoaded(false);
    setStatus("idle");
  };
  const onLoadMoreClick = () => {
    setPage((state) => state + 1);
  };

  useEffect(() => {
    if (keyWord === "") {
      setAllLoaded(true);
      return;
    }
    setStatus("pending");
    setAllLoaded(true);
    fetchMovies(page, keyWord)
      .then((data) => {
        if (data.total_results) {
          setMovies((state) => [...state, ...data.results]);
          setStatus("resolved");
          setAllLoaded(false);
          console.log(data);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
          if (data.results.length < 12) {
            setAllLoaded(true);
          }
        } else {
          throw new Error("Information is not found");
        }
      })
      .catch((error) => {
        setAllLoaded(true);
        setError(error);
        setStatus("rejected");
        console.log(error);
      });
  }, [keyWord, page]);

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === "idle" && <Message>Enter key word for movie search!</Message>}
      {status === "pending" && <Message>Loading...</Message>}
      {status === "resolved" && (
        <MoviesView
          movies={movies}
          onClick={onLoadMoreClick}
          allLoaded={allLoaded}
          error={error}
        />
      )}
      {status === "rejected" && <Message>😕 {error.message}</Message>}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default Movies;
