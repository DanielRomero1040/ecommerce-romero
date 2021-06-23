import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Grid from '@material-ui/core/Grid';

export default function ItemListContainer({name}){
    return(
        <Grid container justify="center" className="">            
            <Grid item xs={12}>
                <ItemList />
            </Grid>            
        </Grid>
    );
};