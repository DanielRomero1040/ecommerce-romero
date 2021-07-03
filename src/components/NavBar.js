import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import {    
    Link
  } from "react-router-dom";


import DateComponent from "./DateComponent"
import CartWidget from "./CartWidget";

export default function NavBar(){

    return (

    <AppBar position="static" style={{flexGrow:1}}>
        <Toolbar>            
            <Typography variant="h6" >
                <Button>
                    <Link style={{color: "white", textDecoration:"none"}} to="/components/ItemListContainer.js">Productos</Link>
                </Button>
            </Typography>
            <Typography variant="h6" style={{flexGrow:1}} >
                <Button>
                    <Link style={{color: "white", textDecoration:"none"}} to="/components/ItemDetailContainer.js">Detalle de Productos</Link>
                </Button>
            </Typography>

            <DateComponent/>
            <Button color="inherit">
                <CartWidget cantidad={5}/>
            </Button>
        </Toolbar>
      </AppBar>
        
     );
}
