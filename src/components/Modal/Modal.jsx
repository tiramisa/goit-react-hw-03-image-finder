import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../css/styles.module.css';

export const Modal = ({ data, closeModal }) => (
  <div className={styles.Overlay} onClick={closeModal}>
    <div className={styles.Modal}>
      <img src={data} alt="Image Alt Text" />
    </div>
  </div>
);

Modal.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
