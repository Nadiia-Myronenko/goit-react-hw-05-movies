import styled from "styled-components";

export const Gallery = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const GalleryItem = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  width: 320px;
  background-color: #fff;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  height: 480px;
  background-color: #000;
`;

export const Poster = styled.img`
  max-width: 100%;
  display: block;
`;

export const MovieTitle = styled.h3`
  margin: 0;
  max-width: 200px;
  font-size: 16px;
`;

export const VoteAverage = styled.span`
  background-color: #dab0af;
  padding: 3px;
  display: inline-block;
  border-radius: 5px;
  height: 21px;
`;

export const InfoThumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
`;
