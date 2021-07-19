import React from 'react';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { TextField } from "@material-ui/core";


const ItemsCart = (props) => {
    return(
        <Grid container item xs={12} sm={12}>
            <Grid item xs={2} sm={2}>
                <img src={props.objeto.item.thumbnail} alt={`${props.objeto.item.title}`}/>                                
            </Grid>
            <Grid item xs={6} sm={6}>
                <Typography variant="h6" component="h6">
                    {props.objeto.item.title}
                </Typography>
                <Typography variant="body1" component="p">
                    Precio unitario: {props.objeto.item.price} $
                </Typography>
            </Grid>
            <Grid item xs={2} sm={2}>
                <Typography variant="body1" component="p">
                    unidades:
                </Typography>
                <TextField
                type="number"
                value={props.objeto.quantity}
                size="small"
                variant="outlined"
                style={{width:80, marginLeft: 10}}
                />
            </Grid>
            <Grid item xs={2} sm={2}>
                <Typography variant="body1" component="p">
                    SubTotal:{props.objeto.quantity*props.objeto.item.price} $
                </Typography>                                
            </Grid>
            <Grid item xs={12} sm={12}>
                <Button
                    startIcon={<DeleteForeverIcon />}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={()=> {props.remover(props.objeto.item.id)}} > 
                    Eliminar este item 
                </Button>                                
            </Grid>            
        </Grid>
)
}

export default ItemsCart