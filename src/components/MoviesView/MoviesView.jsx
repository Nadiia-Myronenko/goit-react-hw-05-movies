import {
  Gallery,
  GalleryItem,
  Poster,
  ImgContainer,
  MovieTitle,
  VoteAverage,
  InfoThumb,
  FilmLink,
} from "./MoviesView.styled";
import { Button, ButtonThumb } from "../Button.styled.js";
import { Wrapper } from "../Wrapper.styled";

const MoviesView = ({ movies, onClick, allLoaded }) => {
  return (
    <Wrapper>
      <Gallery>
        {movies.map((movie) => {
          let imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          return (
            <GalleryItem key={movie.id}>
              <FilmLink to={`${movie.id}`}>
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
              </FilmLink>
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
export default MoviesView;
