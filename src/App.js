import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import NewConcertPage from './pages/newConcert/newConcert.component';
import EditConcertPage from './pages/editConcert/editConcert.component';
import Concert from './pages/concertInfo/concertInfo.component';
import Header from './components/header/header.component';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function App() {
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/newConcert' component={NewConcertPage} />
          <Route exact path='/concert/:id' component={Concert} />
          <Route exact path='/editConcert/:id' component={EditConcertPage} />
        </Switch>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
