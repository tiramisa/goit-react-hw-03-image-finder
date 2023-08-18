import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/styles.module.css';

const Button = ({ onClick, hasMoreImages }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasMoreImages: PropTypes.bool.isRequired,
};

export default Button;
