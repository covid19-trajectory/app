import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Page } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" children={<Page id="homepage" />} />
          <Route path="/:id" children={<Page />} />
          <Route path="*" children={<Page id="page-not-found" />} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
