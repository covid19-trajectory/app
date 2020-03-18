import React from 'react';
import './styles.scss';

export default ({ filename }) => (
  <img className="Image" src={`/images/${filename}`} alt={filename} />
);
