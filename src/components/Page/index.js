import React from 'react';
import { useParams } from 'react-router-dom';
import { Header, Article } from '../';

export default ({ id: paramId }) => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Article id={paramId || id} />
    </div>
  );
};
