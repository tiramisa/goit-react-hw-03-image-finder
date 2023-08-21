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
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleImageClick = imageData => {
    console.log(imageData);
    this.setState({ showModal: true, modalData: imageData });
  };
  handleKeyDown = event => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleLoadMoreClick = () => {
    unsplashInstance.page++;
    this.fetchImages();
  };

  handleSearchSubmit = () => {
    this.setState(prevState => ({
      images: [],
      isLoading: false,
    }));
    this.fetchImages();
  };

  fetchImages = () => {
    unsplashInstance
      .fetchPhotos()
      .then(response => response.json())
      .then(data => {
        this.addImages(data.hits);
      })
      .catch(error => {
        console.error('Error loading images:', error);
        this.setState({ isLoading: false });
      });
  };

  addImages = images => {
    this.setState(prevState => ({
      images: [...prevState.images, ...images],
      isLoading: false,
    }));
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
        <Button
          onClick={this.handleLoadMoreClick}
          hasMoreImages={images.length !== 0}
        />
      </div>
    );
  }
}
