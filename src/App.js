import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';


import {Provider} from 'react-redux';
import store from './store';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// HashRouter does not cause errors when deploying on GitHub pages
// while BrowserRouter can cause issues. 

// BrowserRouter takes only 1 element as a child div.!
class App extends Component {

  render(){   
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route component={Landing} exact path="/"/>
              <Route component={Movie} exact path="/movie/:id"/>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
