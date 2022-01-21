import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchActors } from "../../services/api";
import { ActorsCards, ActorCard, ActorInfo } from "../Cast/Cast.styled";
import defaultActor from "../../images/defaultActor.png";

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState("");
  console.log(movieId);

  useEffect(() => {
    fetchActors(movieId)
      .then((data) => {
        console.log(data.cast);
        return setActors(data.cast);
      })
      .catch((error) => {
        setError(error);
      });
  }, [movieId]);

  return (
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
  );
};
export default Cast;
