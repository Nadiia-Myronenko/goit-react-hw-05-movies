import styled from "styled-components";

export const MovieInfoWrapper = styled.div`
  display: flex;
  padding: 20px;
`;
export const Poster = styled.img`
  width: 200px;
  margin-right: 40px;
`;
export const MovieHeading = styled.h3`
  margin-top: 0;
`;
export const InfoThumb = styled.div`
  margin-top: 0;
`;
export const Text = styled.p`
  margin-top: 0;
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
  li {
    margin-right: 20px;
    font-style: italic;
  }
`;
export const NavigationBlock = styled.div`
  padding: 10px;
  box-shadow: 0px 0px 4px #6f5a59;
  margin-bottom: 20px;
  h4,
  ul {
    margin-top: 0;
  }
`;
