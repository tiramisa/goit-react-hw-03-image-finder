import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { Modal } from './Modal/Modal';
import SearchBar from './SearchBar/SearchBar';
import { unsplashInstance } from 'api';
import '../css/styles.module.css';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    showModal: false,
    modalData: { img: '', alt: '' },
  };

  handleImageClick = imageData => {
    console.log(imageData);
    this.setState({ showModal: true, modalData: imageData });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleLoadMoreClick = () => {
    this.setState({ isLoading: true });

    unsplashInstance
      .fetchPhotos()
      .then(response => response.json())
      .then(data => {
        const newImages = data.hits.filter(
          newImage =>
            !this.state.images.some(
              existingImage => existingImage.id === newImage.id
            )
        );

        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          isLoading: false,
        }));
      })
      .catch(error => {
        console.error('Error loading more images:', error);
        this.setState({ isLoading: false });
      });
  };

  handleSearchSubmit = () => {
    this.setState({ isLoading: true });

    unsplashInstance
      .fetchPhotos()
      .then(response => response.json())
      .then(data => {
        this.setState({
          images: data.hits,
          isLoading: false,
        });
      })
      .catch(error => {
        console.error('Error loading images:', error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading, showModal, modalData } = this.state;

    return (
      <div className="root">
        {showModal && <Modal data={modalData} closeModal={this.closeModal} />}
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} onClickImage={this.handleImageClick} />
        )}
        <Button onClick={this.handleLoadMoreClick} hasMoreImages={true} />
      </div>
    );
  }
}
