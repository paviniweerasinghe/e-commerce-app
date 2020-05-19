import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details  from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment> 
      <NavBar/>
      <Switch> 
        <Route exact path='/' component={ProductList}/>
        <Route path='/details' component={Details}/>
        <Route path='/cart' component={Cart}/>
        <Route  component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
