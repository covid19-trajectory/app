import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Markdown } from '../';

const ERROR_404 = '# Strona nie istnieje';

export default ({ id: paramId }) => {
  const { id } = useParams();
  const [article, setArticle] = useState('');
  const load = useCallback(async id => {
    try {
      const res = await fetch(`./articles/${id}.md`);
      const article = await res.text();
      if (article.substr(0, 9) === '<!DOCTYPE') {
        setArticle(ERROR_404);
      } else {
        setArticle(article);
      }
    } catch (e) {}
  }, []);
  useEffect(() => {
    load(paramId || id);
  }, [load, paramId, id]);
  return <Markdown data={article} />;
};
