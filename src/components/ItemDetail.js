import React,{useState} from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";
import ItemCount from "./ItemCount";

import {Link} from "react-router-dom";


const ItemDetail = (element) =>{
    const [count, setCount] = useState(1)
    const [showButton, setShowButton] = useState(true)

    const onAdd = (value, event) =>{
        if(event){
            console.log(!showButton)
            setShowButton(!showButton)
            setCount(value)
            console.log("se guarda el valor en el padre", value) 
        }
    }

    return(
        <Grid item xs={12} justifycontent="center">
            <Box justifyContent="center">
                <Card style={{height:600, margin: 20, padding: 20,  backgroundColor: '#dce8df', display: "flex", textAlign:"center"}}> 
                    <CardMedia
                        style={{height:550, width: 550, marginRight: 20, borderRadius: 5 }}
                        image={element.objeto.thumbnail}              
                        />                            
                    <CardContent style={{display:"flex", flexDirection: "column", justifyContent:"space-evenly", width: 500}}>
                        <Typography variant="h3" component="h2">
                            {element.objeto.title}
                        </Typography>
                        <Typography variant="h3" component="h3">
                            {element.objeto.price} $
                        </Typography>
                        {showButton===true? (
                            <ItemCount stock={element.objeto.available_quantity} initial={1} onAdd={onAdd}  id={element.objeto.title} />
                        ):(
                            <Link to={`/cart`}>
                                <Button
                                    startIcon={<ShoppingCartIcon />}
                                    variant="contained"
                                    color="success"
                                    onClick={()=> {}} > 
                                    Terminar mi compra 
                                </Button>
                            </Link>
                        )}
                    </CardContent>  
                </Card>
            </Box>           
        </Grid>
    )
}

export default ItemDetail;