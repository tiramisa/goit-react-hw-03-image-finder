import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import SearchBar from './SearchBar/SearchBar';
import { unsplashInstance } from 'api';
import { Component } from 'react';

import '../css/styles.module.css';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  updateImages = newImages => {
    this.setState(prevState => ({
      images: newImages,
    }));
  };

  updateIsLoading = isLoading => {
    this.setState(prevState => ({
      isLoading: isLoading,
    }));
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div className="root">
        <Modal />
        <SearchBar
          onSubmit={() => {
            this.updateIsLoading(true);
            unsplashInstance
              .fetchPhotos()
              .then(data => {
                data.json().then(json => {
                  this.updateImages(json.hits);
                  this.updateIsLoading(false);
                });
              })
              .finally();
          }}
        />
        {isLoading ? <Loader /> : <ImageGallery images={images} />}
        <Button />
      </div>
    );
  }
}
