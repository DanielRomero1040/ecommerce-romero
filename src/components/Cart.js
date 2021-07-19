import React, {useContext} from 'react';
import { Grid, Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import ItemsCart from './ItemsCart'


//context

import {CartContext} from '../context/CartContext';

const Cart = () => {
    const {removeItem,clear,cart} = useContext(CartContext);


    return(
        <Box px={{xs:3 , sm:5}} py={{xs:10, sm:10}} style={{minHeight:"53vh"}}>
            <Container maxWidth = "lg">
                <Grid container spacing={5}>
                    {cart.map((element)=>(
                        <ItemsCart key={element.item.id} objeto={element} remover={removeItem}/>
                    ))}                    
                </Grid>
                <Grid container spacing={5}>
                    <Typography variant="body1" component="p">

                    </Typography>
                </Grid>
                <Grid container spacing={5} style={{display:"flex", justifyContent:"flex-end", padding:100}}>
                    <Button                        
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={()=> {clear()}} > 
                    Limpiar el Carrito 
                    </Button> 
                    <Button                     
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={()=> {}}
                    style={{marginLeft:15}} 
                    > 
                    Continuar Compra 
                    </Button> 
                </Grid>
            </Container>
        </Box>
    )
}

export default Cart;