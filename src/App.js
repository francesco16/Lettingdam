import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Listings from './pages/Listings/Listings';
import SingleListing from './pages/SingleListing';
import Error from './pages/Error';
import ScrollIntoView from './components/ScrollIntoView';

export default function App() {
  return (
    <ScrollIntoView>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/listings/" component={Listings}/>
        <Route exact path="/listings/:slug" component={SingleListing}/>
        <Route component={Error}/>
      </Switch>
    </ScrollIntoView>
  )
}