import React from "react";
import { Grid } from "@material-ui/core";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";
import ItemCount from "./ItemCount";


const ItemDetail = (element) =>{


    return(
        <Grid item xs={12} justifycontent="center">
            <Box justifyContent="center">
                <Card style={{height:600, margin: 20, padding: 20,  backgroundColor: '#dce8df', display: "flex", textAlign:"center"}}> 
                    <CardMedia
                        style={{height:550, width: 550, marginRight: 20, borderRadius: 5 }}
                        image={element.objeto.imagen}              
                        />                            
                    <CardContent style={{display:"flex", flexDirection: "column", justifyContent:"space-evenly", width: 500}}>
                        <Typography variant="h3" component="h2">
                            {element.objeto.nombre}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" gutterBottom >
                            {element.objeto.descripcion}
                        </Typography>
                        <Typography variant="h3" component="h3">
                            {element.objeto.precio} $
                        </Typography>
                        <ItemCount stock={10} initial={1} onAdd={()=>{alert("se agrega al carrito")}}  id={element.objeto.title} />
                    </CardContent>  
                </Card>
            </Box>           
        </Grid>
    )
}

export default ItemDetail;