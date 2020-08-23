import React from 'react';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import TicketBooking from './pages/TicketBooking';
import GetMovieList from './pages/GetMovieList';
import GetCustomer from './pages/GetCustomer';
import AddMovie from './pages/AddMovie';
import RemoveMovie from './pages/RemoveMovie';
import CancelTicket from './pages/CancelTicket';
function App() {

  return (
    <div className="App">
      <header>

      <Router>
        
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/BookTicket" component={TicketBooking} ></Route>
            <Route path="/AddMovie" component={AddMovie} ></Route>
            <Route path="/RemoveMovie" component={RemoveMovie} ></Route>
            <Route path="/CustomerList" component={GetCustomer} ></Route>
            <Route path="/MovieList" component={GetMovieList} ></Route>
            <Route path="/CancelTicket" component={CancelTicket}></Route>
            
          </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
