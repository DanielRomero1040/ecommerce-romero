import React from 'react';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledCell = {
    fontWeight: "bolder",
    color: "white"
}

export const Order = (props) => {
    return(
        <Grid container item style={{display:"flex", flexDirection: "column"}}>
            <Grid item style={{marginLeft:10, paddingBottom: 10}}>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow style={{backgroundColor: "gray"}}>
                                <TableCell style={StyledCell}>El Id de su orden es :</TableCell>                                    
                            </TableRow>
                        </TableHead>
                        <TableBody>                            
                            <TableRow key={'total'}>
                                <TableCell component="th" scope="row">
                                    {props.orderId}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>             
            </Grid>           
            <Grid item style={{marginLeft:10, paddingBottom: 10}}>                
                <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow style={{backgroundColor: "gray"}}>
                                    <TableCell style={StyledCell}>Nombre</TableCell>
                                    <TableCell style={StyledCell} align="center">Apellido</TableCell>
                                    <TableCell style={StyledCell} align="center">Edad</TableCell>
                                    <TableCell style={StyledCell} align="center">email</TableCell>
                                    <TableCell style={StyledCell} align="center">Telefono</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>                            
                            <TableRow key={'total'}>
                                    <TableCell component="th" scope="row">
                                        {props.formData.name}
                                    </TableCell>                                    
                                    <TableCell align="center">{props.formData.lastName}</TableCell>
                                    <TableCell align="center">{props.formData.age}</TableCell>
                                    <TableCell align="center">{props.formData.email}</TableCell>
                                    <TableCell align="center">{props.formData.phone}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>        
            </Grid>

            <Grid item style={{marginLeft:10, paddingBottom: 10}}>
                {           
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow style={{backgroundColor: "gray"}}>
                                    <TableCell style={StyledCell}>Items</TableCell>
                                    <TableCell style={StyledCell} align="center">ID</TableCell>
                                    <TableCell style={StyledCell} align="center">Unidades</TableCell>
                                    <TableCell style={StyledCell} align="center">Precio Unitario</TableCell>
                                    <TableCell style={StyledCell} align="center">SubTotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {props.cart.map((el)=>(
                                <TableRow key={el.item.id}>
                                    <TableCell component="th" scope="row">
                                        {el.item.title}
                                    </TableCell>
                                    <TableCell align="center">{el.item.id}</TableCell>
                                    <TableCell align="center">{el.quantity}</TableCell>
                                    <TableCell align="center" style={{width:100}}>{el.item.price} $</TableCell>
                                    <TableCell align="center" style={{width:100}}>{el.item.price * el.quantity} $</TableCell>
                                </TableRow>
                            ))}
                            <TableRow key={'total'}>
                                    <TableCell component="th" scope="row">
                                        Total a Pagar
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right">{props.total} $</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>                    
                }
            </Grid>
        </Grid>
    )
}