import React from "react";
import { Grid } from "@material-ui/core";
import ItemCount from "./ItemCount";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom";


const Item = (element) =>{


    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            
            <Card style={{height: "auto", width: 280}}>
                <Link style={{color: "white", textDecoration:"none"}} to={`/category/${element.category}/products/${element.objeto.id}`}>
                    <CardMedia
                        image={element.objeto.thumbnail}
                        title={element.objeto.title}
                        style={{minHeight: 250}}
                    />
                </Link>
                <CardContent style={{textAlign: "center"}}>
                    <Typography
                        variant="body2"
                        component="h4"
                    >
                        {element.objeto.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="h4"
                    >
                        {element.objeto.price} $
                    </Typography>
                    <ItemCount stock={10} initial={1} onAdd={()=>{alert("se agrega al carrito")}}  id={element.objeto.title} />    
                </CardContent>
            </Card>                
                    
        </Grid>
    )
}

export default Item;