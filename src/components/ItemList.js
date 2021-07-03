import React from "react";
import Item from "./Item";
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

const ItemList = (props) => {
    return(
        <Grid container direction="column" alignItems="center" justify="center">  
            
            <Grid container direction="column" alignItems="center" style={{padding: 20}}>
                <Typography variant="h3" component="h2">
                    Item List
                </Typography>
            </Grid>

            <Grid container spacing={5} justify="center">                            
                {props.array.map((element)=>(   
                    <Item objeto={element} key={element.id}/>                            
                    ))}
            </Grid> 
        </Grid>
    )
}

export default ItemList;