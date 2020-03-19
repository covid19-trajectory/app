import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default ({ id, title, date }) => {
  const onClick = useCallback(() => window.scrollTo(0, 0), []);
  return (
    <Link className="Teaser" to={id} onClick={onClick}>
      <h2>{title}</h2>
      {date && <div className="Teaser__date">{date}</div>}
    </Link>
  );
};
