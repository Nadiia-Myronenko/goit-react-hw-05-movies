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
} from "./Popular.styled";
import { Button } from "../Button.styled";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);

  const onMoreClick = () => {
    setPage((s) => s + 1);
  };

  useEffect(() => {
    fetchPopular(page).then((data) =>
      setPopularMovies((state) => [...state, ...data.results])
    );
  }, [page]);

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
      <Button type="button" onClick={onMoreClick}>
        Load more...
      </Button>
    </>
  );
};
export default Popular;
