import React, { PureComponent } from 'react';
import './App.css';
// router
import { Route, Switch } from "react-router-dom";
// container components
import Mainpage from "./pages/mainpage";
import { connect } from 'react-redux'
import { fetchTrends } from './store/trendsAction'

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path = "/"><Mainpage/></Route>
        <Route path = "">Not Found</Route>
      </Switch>  
    )
  }
}

export default connect(null, fetchTrends)(App);
