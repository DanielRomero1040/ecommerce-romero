import React, {useContext, useEffect} from 'react';
import { Grid, Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import ItemsCart from './ItemsCart'

import {    
    Link
  } from "react-router-dom";

//context

import {CartContext} from '../context/CartContext';

const Cart = () => {
    const {removeItem,clear,cart,total, setTotal, addOneItem,substractOneItem} = useContext(CartContext);

    const totalCart = cart.reduce((acum,e)=> acum += e.item.price * e.quantity , 0);
    
    useEffect(() => {
        setTotal(totalCart)
    }, [totalCart])

    return(
        <Box px={{xs:3 , sm:5}} py={{xs:10, sm:10}} style={{minHeight:"53vh"}}>
            <Container maxWidth = "lg">
                {cart.length === 0? (
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" component="p" style={{textAlign:"center"}}>
                                El Carrito está vacío, haz 
                                <Link style={{paddingLeft: 10, paddingRight:10}} to={`/`}>
                                click acá
                                </Link> 
                                para buscar tu producto.
                            </Typography>
                        </Grid>
                    </Grid>
                ):(
                    <Grid container spacing={5}>
                        {cart.map((element)=>(
                            <ItemsCart key={element.item.id} objeto={element} remover={removeItem} addOne={addOneItem} substractOne={substractOneItem}/>
                        ))}                    
                    </Grid>
                )}
                <Grid container spacing={5} style={{display:"flex", justifyContent:"flex-end", padding:100}}>
                    <Typography variant="h6" component="p">
                      Total a Pagar:  {total} $
                    </Typography>
                </Grid>
                <Grid container spacing={5} style={{display:"flex", justifyContent:"flex-end", padding:10}}>
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