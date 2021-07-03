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



function App() {
  return (
    <Grid container direction="column">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>  
          <Route exact path="/components/ItemListContainer.js">
            <ItemListContainer/>
          </Route>          
          <Route exact path="/components/ItemDetailContainer.js">
            <ItemDetailContainer/>
          </Route>
        </Switch> 
      </Router>
    </Grid>
  );
}

export default App;
