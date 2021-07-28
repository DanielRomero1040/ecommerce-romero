import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export const Order = (props) => {
    return(
        <Grid container item style={{display:"flex", flexDirection: "column"}}>
            <Typography variant="h5" component="h1">
            El Id de su orden es : {props.orderId}
            </Typography>
            <Typography variant="body1" component="h2">
            Buyer :
            </Typography>
            <Grid item style={{marginLeft:10}}>
                <Typography variant="body2" component="p">
                Nombre: {props.formData.name}
                </Typography>
                <Typography variant="body2" component="p1">
                Apellido: {props.formData.lastName}
                </Typography>
                <Typography variant="body2" component="p">
                Edad: {props.formData.age}
                </Typography>
                <Typography variant="body2" component="p">
                email: {props.formData.email}
                </Typography>
                <Typography variant="body2" component="p">
                Telefono: {props.formData.phone}
                </Typography>
            </Grid>

            <Typography variant="body1" component="h2">
            Items :
            </Typography>
            <Grid item style={{marginLeft:10}}>
                {
                    props.cart.map((el)=>(
                        <Typography variant="body2" component="p">
                        - Id: {el.item.id} - {el.item.title} - Unds: {el.quantity} - Precio unt {el.item.price}$
                        </Typography>
                    ))
                }
            </Grid>
            <Typography variant="h5" component="h2">
            Total a Pagar: {props.total} $
            </Typography>

        </Grid>
    )
}