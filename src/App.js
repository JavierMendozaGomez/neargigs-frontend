import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import NewConcertPage from './pages/newConcert/newConcert.component';
import Concert from './pages/concertInfo/concertInfo.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/newConcert' component={NewConcertPage} />
        <Route exact path='/concert' component={Concert} />
      </Switch>
    </div>
  );
}

export default App;
