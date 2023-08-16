import React from 'react';

const Button = ({ onClick, hasMoreImages }) => (
  <button type="button" className="load-more-button" onClick={onClick}>
    Load more
  </button>
);

export default Button;
