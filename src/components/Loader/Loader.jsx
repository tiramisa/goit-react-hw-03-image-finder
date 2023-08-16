import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

const Loader = () => (
  <div className="loader">
    <LoaderSpinner type="Oval" color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
