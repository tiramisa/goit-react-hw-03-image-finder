import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../css/styles.module.css';

export const Modal = ({ data, closeModal }) => {
  const { img, alt } = data;
  return (
    <div className={styles.Overlay} onClick={closeModal}>
      <div className={styles.Modal}>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
