import React from 'react';

import styles from '../../css/styles.module.css';

const Button = ({ onClick, hasMoreImages }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    Load more
  </button>
);

export default Button;
