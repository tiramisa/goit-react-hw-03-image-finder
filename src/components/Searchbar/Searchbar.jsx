import React, { Component } from 'react';

import styles from '../../css/styles.css';

const Searchbar = ({ onSubmit }) => (
  <header className="styles.searchbar">
    <form className="styles.form" onSubmit={onSubmit}>
      <button type="styles.submit" className="button">
        <span className="styles.button-label">Search</span>
      </button>

      <input
        className="styles.input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;
