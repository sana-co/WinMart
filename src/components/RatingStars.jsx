import React from 'react';
import './RatingStars.css';

const RatingStars = ({ rating, onChange, interactive = false, size = 'md' }) => {
  return (
    <div className={`rating-stars rating-${size} ${interactive ? 'interactive' : ''}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => interactive && onChange && onChange(star)}
          type={interactive ? 'button' : 'button'}
          disabled={!interactive}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default RatingStars;
