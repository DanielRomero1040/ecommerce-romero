import React, {useContext, useEffect} from 'react';
import { Grid, Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import ItemsCart from './ItemsCart'
import {Link} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {CartContext} from '../context/CartContext';

const StyledCell = {
    fontWeight: "bolder",
    color: "white"
}
const Cart = () => {
    const {removeItem,clear,cart,total, getTotal, addOneItem,substractOneItem} = useContext(CartContext);
    
    useEffect(() => {
        getTotal()
    }, [cart])

    return(
        <Box px={{xs:3 , sm:5}} py={{xs:10, sm:10}} style={{minHeight:"53vh"}}>
            <Container maxWidth = "lg">
                {cart.length === 0? (
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h4" component="p" style={{textAlign:"center"}}>
                                El Carrito está vacío, haz 
                                <Link style={{paddingLeft: 10, paddingRight:10}} to={`/`}>
                                click acá
                                </Link> 
                                para buscar tu producto.
                            </Typography>
                        </Grid>
                    </Grid>
                ):(
                    <Grid container spacing={5}>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow style={{backgroundColor: "gray"}}>
                                        <TableCell style={StyledCell}>Productos</TableCell>
                                        <TableCell style={StyledCell} align="center">Descripción</TableCell>
                                        <TableCell style={StyledCell} align="center">Precio Unit.</TableCell>
                                        <TableCell style={StyledCell} align="center"></TableCell>
                                        <TableCell style={StyledCell} align="center">Cantidad</TableCell>
                                        <TableCell style={StyledCell} align="center">Stock disp.</TableCell>
                                        <TableCell style={StyledCell} align="center">Subtotal</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody> 
                                    {cart.map((element)=>(
                                        <ItemsCart key={element.item.id} objeto={element} remover={removeItem} addOne={addOneItem} substractOne={substractOneItem}/>
                                    ))}
                                        <TableRow key={"total"}>
                                            <TableCell component="th" scope="row" align="center" ></TableCell>                                    
                                            <TableCell align="left" ></TableCell>
                                            <TableCell align="left" ></TableCell>
                                            <TableCell align="left" ></TableCell>
                                            <TableCell align="left" >Total a Pagar:</TableCell>
                                            <TableCell align="left" style={{fontWeight: "bold", fontSize: 20}}>{total} $</TableCell>
                                        </TableRow>                    
                                </TableBody>
                            </Table>
                        </TableContainer> 
                    </Grid>
                )}
                <Grid container spacing={5} style={{display:"flex", justifyContent:"flex-end", padding:50}}>
                    <Button                        
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={()=> {clear()}} > 
                    Limpiar el Carrito 
                    </Button>
                    <Button
                    disabled={cart.length === 0}                   
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={()=> {}}
                    style={{marginLeft:15}} 
                    > 
                        <Link to={`/formBuy`} style={{color:'white'}}>
                            Continuar Compra 
                        </Link>
                    </Button>
                </Grid>
            </Container>
        </Box>
    )
}

export default Cart;