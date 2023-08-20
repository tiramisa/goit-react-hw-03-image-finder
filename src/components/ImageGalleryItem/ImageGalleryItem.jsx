import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/styles.module.css';

const ImageGalleryItem = ({ item, onClickImage }) => {
  const { tags } = item;
  return (
    <li key={item.id} className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImage}
        src={item.previewURL}
        alt={tags}
        onClick={e =>
          onClickImage({
            img: item.previewURL,
            alt: item.tags,
          })
        }
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewURL: PropTypes.string.isRequired,
  }).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
