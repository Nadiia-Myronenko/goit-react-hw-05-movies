import styled from "styled-components";

export const ActorsCards = styled.ul`
  list-style: none;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

export const ActorCard = styled.li`
  width: 250px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 4px #6f5a59;
  img {
    width: 100%;
    display: block;
  }
`;
export const ActorInfo = styled.div`
  padding: 10px;
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
  }
`;
