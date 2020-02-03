import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
