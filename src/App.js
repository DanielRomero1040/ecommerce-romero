import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// components
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Cart from "./components/Cart";
import { FormBuyContainer } from "./components/FormBuyContainer";


import { Grid } from '@material-ui/core';

//Context desafio

import CartCustomProvider from './context/CartContext';

function App() {   
  return (
    <CartCustomProvider>
      <Grid container direction="column" style={{backgroundColor: "#ebebeb"}}>
        <Router>
          <NavBar/>
            <Switch>
              <Route exact path="/">
                <ItemListContainer/>
              </Route>  
              <Route exact path="/category/:categoryId">
                <ItemListContainer/>
              </Route>         
              
              <Route exact path="/products/:productoId">
                <ItemDetailContainer/>
              </Route>
              <Route exact path="/cart">
                <Cart/>
              </Route>
              <Route exact path="/formBuy">
                <FormBuyContainer/>
              </Route>
            </Switch>
          <Footer/> 
        </Router>
      </Grid>
    </CartCustomProvider>
  );
}

export default App;
