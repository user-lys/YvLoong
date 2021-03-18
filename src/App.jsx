import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';
import Login from '@/views/Login';
import Home from '@/views/Home';

import VerfyCmp from "@/components/VerifyCmp";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login}></Route>
        <VerfyCmp path="/home" component={Home}></VerfyCmp>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    )
  }
}
