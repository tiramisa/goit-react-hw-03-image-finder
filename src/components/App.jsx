import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import SearchBar from './SearchBar/SearchBar';
import { unsplashInstance } from 'api';

import '../css/styles.module.css';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  updateImages = newImages => {
    this.setState({ images: newImages });
  };

  updateIsLoading = isLoading => {
    this.setState({ isLoading });
  };

  handleLoadMoreClick = () => {
    this.updateIsLoading(true);

    unsplashInstance
      .fetchPhotos()
      .then(response => response.json())
      .then(data => {
        this.updateImages([...this.state.images, ...data.hits]);
        this.updateIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading more images:', error);
        this.updateIsLoading(false);
      });
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
              .then(response => response.json())
              .then(data => {
                this.updateImages(data.hits);
                this.updateIsLoading(false);
              })
              .catch(error => {
                console.error('Error loading images:', error);
                this.updateIsLoading(false);
              });
          }}
        />
        {isLoading ? <Loader /> : <ImageGallery images={images} />}
        <Button onClick={this.handleLoadMoreClick} />
      </div>
    );
  }
}
