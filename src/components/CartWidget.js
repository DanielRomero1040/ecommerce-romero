import React from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';

export default class CartWidget extends React.Component{
    constructor(props){
        super(props);
        this.state = { cantidad: 0}

    }
    render(){
        return (
            <span className="">             
                <Badge badgeContent={this.state.cantidad} color="primary">
                    <ShoppingCartIcon
                    style={{ color: "white" }}                   
                    /> 
                </Badge> 
            </span>
        )
    };
};