import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default () => (
  <header className="Header">
    <Link to={'/'}>
      <strong>Epidemia koronawirusa w Polsce</strong>
      <div>
        statystyki, analiza, prognoza dalszego rozwoju, porównanie z innymi
        krajami
      </div>
    </Link>
    <div></div>
  </header>
);
