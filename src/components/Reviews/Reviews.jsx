import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviewsFetch } from "../../services/api";
import s from "./reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    movieReviewsFetch(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  if (reviews !== "") {
    return (
      <>
        <ul className={s.list}>
          {reviews.map((review) => (
            <li key={review.id}>
              <div className={s.wrapper}>
                <h3>
                  Author: <span>{review.author}</span>
                </h3>
                <p className={s.text}>"{review.content}"</p>
                <p className={s.date}>"{review.updated_at.slice(0, 10)}"</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default Reviews;
