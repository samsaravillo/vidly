import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';

class App extends Component {
  state = {  };
  
  render() { 
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <div className="content">
            <Switch>
              <Route path="/movies/:_id" component={MovieForm} />
              <Route path="/movies" component={Movies} />
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
