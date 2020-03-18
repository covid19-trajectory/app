import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default () => (
  <header className="Header">
    <Link to={'/'}>
      <strong>Epidemia koronawirusa w Polsce</strong>
    </Link>
    <div>statystyki, analizy, prognozy dalszego rozwoju</div>
  </header>
);
