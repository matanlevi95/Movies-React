import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MoviesPage from "./components/MoviesPage"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';

class App extends Component<any, any> {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/search" component={MoviesPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
