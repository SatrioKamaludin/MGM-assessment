import React from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Collections" component={Homepage}></Route>
        <Redirect from="/" to="/Collections"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
