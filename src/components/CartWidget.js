import React, {useContext} from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';

//context

import {CartContext} from '../context/cartContext';


 const CartWidget = (props) => {
    const cart = useContext(CartContext);
    
    return (
        <span className="">             
            <Badge badgeContent={cart} color="primary">
                <ShoppingCartIcon
                style={{ color: "white" }}                   
                /> 
            </Badge> 
        </span>
    );
    

};

export default CartWidget;