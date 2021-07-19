import React, {useContext, useEffect} from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';

//context

import {CartContext} from '../context/CartContext';

 const CartWidget = () => {
    const {cart} = useContext(CartContext);

    const cartIndicator = cart.reduce((acum, e ) => acum += e.quantity, 0);

    useEffect(() => {
    }, [cart])
    
    return (
        <span className="">             
            <Badge 
            badgeContent={cartIndicator} 
            color="secondary">
                <ShoppingCartIcon
                style={{ color: "white" }}                   
                />
            </Badge> 
        </span>
    ); 
};

export default CartWidget;