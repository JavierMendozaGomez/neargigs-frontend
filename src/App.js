import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import NewConcertPage from './pages/newConcert/newConcert.component';
import Concert from './pages/concertInfo/concertInfo.component';
import Header from './components/header/header.component';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import MomentUtils from '@date-io/moment';

function App() {
  useEffect(() => {
    tt.map({
      key: process.env.API_KEY_TOMTOM,
      container: 'map',
      style: 'tomtom://vector/1/basic-main',
      center: [-0.128666, 51.505814],
      zoom: 10,
    });
  }, []);
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/newConcert' component={NewConcertPage} />
          <Route exact path='/concert/:id' component={Concert} />
        </Switch>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
