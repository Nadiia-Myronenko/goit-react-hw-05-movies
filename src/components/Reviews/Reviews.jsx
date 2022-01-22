import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "../../services/api";
import { Title } from "./Reviews.styled";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReviews(movieId)
      .then((data) => {
        return setReviews(data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      <Title>Reviews</Title>
      <ul>
        {reviews.map((review, index) => {
          return (
            <li>
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
