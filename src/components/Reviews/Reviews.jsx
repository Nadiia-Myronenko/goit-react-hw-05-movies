import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "../../services/api";
import { Title } from "./Reviews.styled";
import { Message } from "../Message.styled";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReviews(movieId)
      .then((data) => {
        if (data.results.length) {
          return setReviews(data.results);
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
      <Title>Reviews</Title>
      {error && <Message>We don't have any review for this movie.</Message>}
      <ul>
        {reviews.map((review, index) => {
          return (
            <li key={index}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
              <p>
                <i>{review.created_at}</i>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Reviews;
