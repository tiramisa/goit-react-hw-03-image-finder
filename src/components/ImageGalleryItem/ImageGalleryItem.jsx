import React, { Component } from 'react';

import styles from '../../css/styles.module.css';

const ImageGalleryItem = ({ item }) => (
  <>
    <li className={styles.ImageGalleryItem}>
      <img className={styles.ImageGalleryItemImage} src="" alt="" />
    </li>
  </>
);

export default ImageGalleryItem;
