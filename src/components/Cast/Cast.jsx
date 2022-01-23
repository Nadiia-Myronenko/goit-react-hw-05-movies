import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchActors } from "../../services/api";
import { ActorsCards, ActorCard, ActorInfo, Title } from "../Cast/Cast.styled";
import defaultActor from "../../images/defaultActor.png";
import { Message } from "../Message.styled";

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchActors(movieId)
      .then((data) => {
        if (data.cast.length) {
          return setActors(data.cast);
        } else {
          throw new Error("Information is not found");
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      <Title>Cast</Title>
      {error && (
        <Message>
          We don't have any information about the cast for this movie.
        </Message>
      )}
      <ActorsCards>
        {actors.map((actor) => {
          let imgURL = "";
          if (actor.profile_path) {
            imgURL = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
          } else {
            imgURL = defaultActor;
          }
          return (
            <ActorCard key={actor.id}>
              <img src={imgURL} alt={actor.name} />
              <ActorInfo>
                <h3>{actor.name}</h3>
                <p>
                  <i>Character:</i> {actor.character}
                </p>
              </ActorInfo>
            </ActorCard>
          );
        })}
      </ActorsCards>
    </>
  );
};
export default Cast;
