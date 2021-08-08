import React from "react";
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import payment from '../assets/payment.svg';
import protectedLogo from '../assets/protected.svg';
import shipping from '../assets/shipping.svg';
import Typography from '@material-ui/core/Typography';


const Footer = () =>{
    return(
        <Box px={{xs:3 , sm:10}} py={{xs:5, sm:10}} bgcolor="text.secondary" style={{backgroundColor: "#fff"}} >
            <Container maxWidth = "lg">
                <Grid container spacing={5} style={{display:"flex",justifyContent:"center"}}>
                    <Grid item xs={12} sm={4} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Box>
                            <img src={payment} alt="payment"/>
                        </Box>
                        <Typography variant="body1" component="p" style={{textAlign:"center"}} >
                            Con Mercado Pago, pagá con tarjeta, débito o efectivo. También podés pagar en hasta 12 cuotas sin tarjeta con Mercado Crédito.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Box>
                            <img src={shipping} alt="shipping"/>
                        </Box>
                        <Typography variant="body1" component="p" style={{textAlign:"center"}}>
                            Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.
                        </Typography>                        
                    </Grid>
                    <Grid item xs={12} sm={4} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Box>
                            <img src={protectedLogo} alt="protected"/>
                        </Box>
                        <Typography variant="body1" component="p" style={{textAlign:"center"}}>
                            ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default Footer;