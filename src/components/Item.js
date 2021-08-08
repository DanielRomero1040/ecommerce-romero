import React, {useState, useContext} from "react";
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import CardActions from '@material-ui/core/CardActions';
import { CartContext } from "../context/CartContext";


const Item = (element) =>{
    const [size, setSize] = useState({
        minHeight: 410,
        width: 280
    });
    const {addItemToCart} = useContext(CartContext);

    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{minHeight: size.minHeight, width: size.width, boxShadow: "3px 3px 3px gray", border: "0.7px solid lightgray"}} onMouseEnter={()=>{setSize({minHeight: 415, width:282})}} onMouseLeave={()=>{setSize({minHeight: 410, width:280})}}>
                <Link style={{color: "white", textDecoration:"none"}} to={`/products/${element.objeto.id}`}>
                    <CardMedia
                        image={element.objeto.thumbnail}
                        title={element.objeto.title}
                        style={{minHeight: 250, backgroundSize: 'contain'}}
                    />
                </Link>
                <CardContent style={{textAlign: "center", height: 120}}>
                    <Typography
                        variant="body2"
                        component="h4"
                        style={{widht:280}}
                    >
                        {element.objeto.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="h4"
                    >
                        {element.objeto.price} $
                    </Typography>
                    <Typography
                        variant="body2"
                        component="h4"
                    >
                       Stock disponible: {element.objeto.available_quantity}
                    </Typography>     
                </CardContent>
                <CardActions style={{display:"flex", justifyContent:"center", paddingBottom: 20}}>
                    <Link to={`/cart`}>
                        <Button                        
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={()=>addItemToCart(element, 1)} > 
                        Buy now 
                        </Button>
                    </Link>
                    <Link to={`/products/${element.objeto.id}`}>
                        <Button                     
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={()=> {}}
                        style={{marginLeft:15}} 
                        > 
                        Ver detalle
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Item;