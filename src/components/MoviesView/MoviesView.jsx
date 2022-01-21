import {
  Gallery,
  GalleryItem,
  Poster,
  ImgContainer,
  MovieTitle,
  VoteAverage,
  InfoThumb,
} from "./MoviesView.styled";
import { Button, ButtonThumb } from "../Button.styled.js";
import { Wrapper } from "../Wrapper.styled";
import { Link } from "react-router-dom";

const MoviesView = ({ movies, onClick, allLoaded }) => {
  return (
    <Wrapper>
      <Gallery>
        {movies.map((movie) => {
          let imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          return (
            <GalleryItem key={movie.id}>
              <Link to={`${movie.id}`}>
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
              </Link>
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
