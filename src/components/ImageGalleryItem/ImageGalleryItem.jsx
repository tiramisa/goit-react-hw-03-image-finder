import React, { Component } from 'react';

import styles from '../../css/styles.module.css';

const ImageGalleryItem = ({ item }) => {
  console.log(item);
  return (
    <li key={item.id} className={styles.ImageGalleryItem}>
      <img className={styles.ImageGalleryItem} src={item.previewURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
