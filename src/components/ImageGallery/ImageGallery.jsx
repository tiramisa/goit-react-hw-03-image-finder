import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import styles from '../../css/styles.module.css';

const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    {images.map(element => (
      <ImageGalleryItem item={element} />
    ))}
  </ul>
);

export default ImageGallery;
