import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import NewConcertPage from './pages/newConcert/newConcert.component';


import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/newConcert' component={NewConcertPage} />
      </Switch>
      <HomePage />
    </div>
  );
}

export default App;
