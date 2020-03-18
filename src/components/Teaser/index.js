import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default ({ id, title, date }) => (
  <Link className="Teaser" to={id}>
    <h2>{title}</h2>
    {date && <div className="Teaser__date">{date}</div>}
  </Link>
);
