import {
  Gallery,
  GalleryItem,
  Poster,
  ImgContainer,
  MovieTitle,
  VoteAverage,
  InfoThumb,
} from "./MovieView.styled";
import { Button, ButtonThumb } from "../Button.styled.js";
import { Wrapper } from "../Wrapper.styled";

const MovieView = ({ movies, onClick, allLoaded }) => {
  console.log(movies);
  return (
    <Wrapper>
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
      {!allLoaded && (
        <ButtonThumb>
          <Button type="button" onClick={onClick}>
            Load more...
          </Button>
        </ButtonThumb>
      )}
    </Wrapper>
  );
};
export default MovieView;
