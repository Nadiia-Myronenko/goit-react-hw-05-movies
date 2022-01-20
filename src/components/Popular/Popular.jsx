import { useState, useEffect } from "react";
//import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { fetchPopular } from "../../services/api";
import {
  Gallery,
  GalleryItem,
  Poster,
  ImgContainer,
  MovieTitle,
  VoteAverage,
  InfoThumb,
  LoadMore,
} from "./Popular.styled";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);

  const onMoreClick = () => {
    setPage((s) => s + 1);
  };

  useEffect(() => {
    fetchPopular(page).then((data) =>
      setPopularMovies([...popularMovies, ...data.results])
    );
  }, [page]);
  console.log(popularMovies);

  return (
    <>
      <Gallery>
        {popularMovies.map((popularMovie, index) => {
          let imgUrl = `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`;
          return (
            <GalleryItem key={index}>
              <ImgContainer>
                <Poster src={imgUrl} alt={popularMovie.original_title} />
              </ImgContainer>
              <InfoThumb>
                {popularMovie.original_title && (
                  <MovieTitle>{popularMovie.original_title}</MovieTitle>
                )}
                <MovieTitle>{popularMovie.original_name}</MovieTitle>
                <VoteAverage>{popularMovie.vote_average}</VoteAverage>
              </InfoThumb>
            </GalleryItem>
          );
        })}
      </Gallery>
      <LoadMore type="button" onClick={onMoreClick}>
        Load more...
      </LoadMore>
    </>
  );
};
export default Popular;
