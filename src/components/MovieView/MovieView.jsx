import {
  Gallery,
  GalleryItem,
  Poster,
  ImgContainer,
  MovieTitle,
  VoteAverage,
  InfoThumb,
} from "./MovieView.styled";
import { Button } from "../Button.styled.js";

const MovieView = ({ movies, onClick }) => {
  console.log(movies);
  return (
    <>
      <Gallery>
        {movies.map((movie, index) => {
          let imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          return (
            <GalleryItem key={index}>
              <ImgContainer>
                <Poster src={imgUrl} alt={movie.original_title} />
              </ImgContainer>
              <InfoThumb>
                {movie.original_title && (
                  <MovieTitle>{movie.original_title}</MovieTitle>
                )}
                <MovieTitle>{movie.original_name}</MovieTitle>
                <VoteAverage>{movie.vote_average}</VoteAverage>
              </InfoThumb>
            </GalleryItem>
          );
        })}
      </Gallery>
      <Button type="button" onClick={onClick}>
        Load more...
      </Button>
    </>
  );
};
export default MovieView;
