import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'components/api';
import { Loader } from 'components/Loader/Loader';
import { List, ListItem, ReviewAuthor } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filmReview = () => {
      setLoading(true);

      getReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    filmReview();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <List>
          {reviews.map(review => (
            <ListItem key={review.id}>
              <ReviewAuthor>Author: {review.author}</ReviewAuthor>
              <p>{review.content}</p>
            </ListItem>
          ))}
        </List>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
