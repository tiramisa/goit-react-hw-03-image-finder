import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

import '../css/styles.module.css';

export const App = () => {
  const isLoading = false;
  return (
    <div>
      <h1>Image Gallery</h1>
      {isLoading ? <Loader /> : <ImageGallery />}
      <Modal />
      <Searchbar />
      <ImageGalleryItem />
      <Button />
    </div>
  );
};
