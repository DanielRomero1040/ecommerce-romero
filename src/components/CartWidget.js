import React from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';

export default class CartWidget extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <span className="">
                <a href="#"  >

                <Badge badgeContent={this.props.cantidad} color="primary">
                    <ShoppingCartIcon
                    style={{ color: "white" }}                   
                    /> 
                </Badge>    
                    
                </a>
            </span>
        )
    };
};