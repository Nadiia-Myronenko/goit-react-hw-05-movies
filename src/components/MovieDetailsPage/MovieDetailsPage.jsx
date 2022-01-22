import { fetchMovie } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MovieInfoWrapper,
  Poster,
  MovieHeading,
  InfoThumb,
  Text,
  GenresList,
  NavigationBlock,
} from "./MovieDetailsPage.styled";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../Button.styled";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(movieId)
      .then((data) => {
        return setMovie(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [movieId]);

  const imgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <>
      <Button onClick={() => navigate(-1)}>← go back</Button>
      {movie && (
        <div>
          <MovieInfoWrapper>
            <Poster src={imgURL}></Poster>
            <InfoThumb>
              <MovieHeading>{movie.original_title}</MovieHeading>
              <Text>Vote Average: {movie.vote_average}</Text>
              <h4>Overview</h4>
              <Text>{movie.overview}</Text>
              <h4>Genres</h4>
              {movie.genres && (
                <GenresList>
                  {movie.genres.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                  ))}
                </GenresList>
              )}
            </InfoThumb>
          </MovieInfoWrapper>
          <NavigationBlock>
            <h4>Additional Information</h4>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </NavigationBlock>
          <Outlet />
        </div>
      )}
    </>
  );
};
export default MovieDetailsPage;
//{movie.genres.map((genre, index) => <li key={index}>{genre.name}</li>)}
