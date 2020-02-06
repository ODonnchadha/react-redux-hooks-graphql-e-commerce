import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import Header from './components/header/header';
import Authorization from './pages/authorization/authorization';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={Authorization} />
        </Switch>
      </div>
    )
  }
}

export default App;
