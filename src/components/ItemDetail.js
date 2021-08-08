import React,{useState, useContext} from "react";
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
import { CartContext } from "../context/CartContext";

const ItemDetail = (element) =>{
    const [count, setCount] = useState(1);
    const [showButton, setShowButton] = useState(true);
    const {addItemToCart} = useContext(CartContext);

    const onAdd = (value, event) =>{
        if(event){
            setShowButton(!showButton)
            setCount(value)
            addItemToCart( element, value);
        }
    }

    return(
        <Grid item xs={12} justifycontent="center">
            <Box justifyContent="center">
                <Card style={{width: '90vw' , padding: 20, display: "flex", justifyContent:"space-around" ,textAlign:"center"}}> 
                    <CardMedia
                        style={{height:550, width: 550, marginRight: 20, borderRadius: 5, backgroundSize: 'contain' }}
                        image={element.objeto.thumbnail}              
                    />                            
                    <CardContent style={{display:"flex", flexDirection: "column", justifyContent:"space-evenly", width: '50vw'}}>
                        <Typography variant="h3" component="h2">
                            {element.objeto.title}
                        </Typography>

                        <Typography variant="h4" component="h3">
                            {element.objeto.price} $
                        </Typography>
                        <Typography variant="body1" component="p">
                            Cantidad disponible: {element.objeto.available_quantity - count}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {element.objeto.warranty}
                        </Typography>
                        <Typography variant="body2" component="p">
                            ID:{element.objeto.id}
                        </Typography>

                        {showButton===true? (
                            <ItemCount stock={element.objeto.available_quantity} initial={1} onAdd={onAdd}  id={element.objeto.title} count={count} setCount={setCount}/>
                        ):(
                            <Link to={`/cart`}>
                                <Button
                                    startIcon={<ShoppingCartIcon />}
                                    variant="contained"
                                    color="secondary"
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