import React from 'react';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const ItemsCart = (props) => {
    return(                                       
        <TableRow key={props.objeto.item.id}>
                <TableCell component="th" scope="row" align="center" >
                    <img src={props.objeto.item.thumbnail} alt={`${props.objeto.item.title}`} style={{backgroundSize: 'contain', height:60}}/>                    
                </TableCell>                                    
                <TableCell align="left" >
                    {props.objeto.item.title}                    
                </TableCell>
                <TableCell align="center">
                    {props.objeto.item.price} $
                </TableCell>
                <TableCell align="center">
                    <IconButton
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={()=> {props.remover(props.objeto.item.id)}}>
                            <DeleteForeverIcon />
                    </IconButton>
                </TableCell>
                <TableCell align="center">
                    <Grid item xs={2} sm={2} style={{display:"flex", alignItems:"center"}}>                
                        <IconButton
                        size="medium"
                        variant="contained"
                        color="secondary"
                        onClick={()=>{ props.substractOne(props.objeto.item.id) }}
                        >
                            <RemoveCircle />
                        </IconButton> 
                        <Typography variant="body1" component="p" style={{textAlign:"center"}}>
                            {props.objeto.quantity}
                        </Typography>
                        <IconButton
                        size="medium" 
                        variant="contained"
                        color="primary"
                        onClick={()=>{ props.addOne(props.objeto.item.id) }}
                        >
                            <AddCircle />
                        </IconButton>
                    </Grid>
                </TableCell><TableCell align="center">
                    {props.objeto.item.available_quantity - props.objeto.quantity}
                </TableCell> 
                <TableCell align="center">
                    {props.objeto.quantity*props.objeto.item.price} $
                </TableCell>                   
            </TableRow> 
)}

export default ItemsCart