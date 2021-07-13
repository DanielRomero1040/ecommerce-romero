import React,{useState} from "react";
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
import { Grid } from '@material-ui/core';

//Context desafio

import {CartContext} from './context/cartContext';



function App() {
  const [cart,setCart] = useState([3]) 
  return (
    <CartContext.Provider value={cart}>
      <Grid container direction="column">
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
          </Switch> 
        </Router>
      </Grid>
    </CartContext.Provider>
  );
}

export default App;
