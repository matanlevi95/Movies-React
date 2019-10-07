import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MoviesPage from "./components/MoviesPage"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import MovieSinglePage from "./components/MovieSinglePage"
import Feedback from "./components/feedback"

class App extends Component<any, any> {

  render() {
    return (
          <div className="App">
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={MoviesPage} />
            <Route path="/movie/:id" component={MovieSinglePage} />
            <Route path="/feedback/:Title" component={Feedback} />
          </Switch>
      </BrowserRouter>
        </div>
    );
  }
}

export default App;
