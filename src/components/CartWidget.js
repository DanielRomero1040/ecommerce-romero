import React, {useContext} from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';
import {CartContext} from '../context/CartContext';

 const CartWidget = () => {
    const {cartIndicator} = useContext(CartContext); 
    
    return (
        <span className="">             
            <Badge 
            badgeContent={cartIndicator} 
            color="secondary">
                <ShoppingCartIcon
                style={{ color: "#736c28" }}                   
                />
            </Badge> 
        </span>
    ); 
};

export default CartWidget;