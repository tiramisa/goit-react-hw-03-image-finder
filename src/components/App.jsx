import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import SearchBar from './SearchBar/SearchBar';
import '../css/styles.module.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    modalData: { img: '', alt: '' },
    hasMoreImages: false,
  };

  fetchPhotos = (q, page) => {
    const itemsPerPage = 12;
    const baseUrl = 'https://pixabay.com/api/';
    const apiKey = '38292476-2e9a08398af0b2923a0e3887f';

    let url = `${baseUrl}?key=38292476-2e9a08398af0b2923a0e3887f&q=${q}&page=${page}&per_page=${itemsPerPage}&client_id=${apiKey}`;
    console.log(url);
    return fetch(url);
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.fetchPhotos(nextQuery, nextPage)
        .then(response => response.json())
        .then(data => {
          this.addImages(data.hits);
          this.setState({ hasMoreImages: data.hits.length > 0 });
        })
        .catch(error => {
          console.error('Error loading images:', error);
          this.setState({ isLoading: false });
        });
    }
  };

  handleImageClick = imageData => {
    console.log(imageData);
    this.setState({ modalData: imageData });
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page++,
      hasMoreImages: false,
    }));
  };

  handleSearchSubmit = evt => {
    evt.preventDefault();
    let q = evt.target.elements.query.value.trim();
    console.log(q);
    this.setState(prevState => ({
      query: q,
      images: [],
      page: 1,
      isLoading: false,
    }));
  };

  addImages = images => {
    this.setState(prevState => ({
      images: [...prevState.images, ...images],
      isLoading: false,
    }));
  };

  render() {
    const { images, isLoading, hasMoreImages } = this.state;
    return (
      <div className="root">
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} onClickImage={this.handleImageClick} />
        )}
        <Button
          onClick={this.handleLoadMoreClick}
          hasMoreImages={hasMoreImages}
        />
      </div>
    );
  }
}
