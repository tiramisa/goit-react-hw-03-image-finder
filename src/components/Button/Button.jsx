import React from 'react';

import styles from '../../css/styles.module.css';

const Button = ({ onClick, hasMoreImages }) => (
  <button type="styles.button" className="load-more-button" onClick={onClick}>
    Load more
  </button>
);

export default Button;
