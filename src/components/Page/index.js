import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, Article, Teaser } from '../';

export default ({ id: propId }) => {
  const { id: paramId } = useParams();
  const id = propId || paramId;
  return (
    <div>
      <Header />
      <Article id={id} />
      {id !== 'kontakt' && <Teaser id="kontakt" title="Kontakt" />}
    </div>
  );
};
