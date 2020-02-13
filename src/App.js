import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        // Has the snapshot changed?
        userRef.onSnapshot(snapShot => {
          this.setState({ 
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            } 
          });
        });
      } else {
        // Set currentUser to null.
        this.setState({currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
