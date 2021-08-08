import React from "react";
import Item from "./Item";
import Grid from '@material-ui/core/Grid';

const ItemList = (props) => {
    return(
        <Grid container direction="column" alignItems="center" justify="center">  
          
            <Grid container spacing={5} justify="center">                            
                {props.array.map((element)=>(   
                    <Item objeto={element} key={element.id}/>                            
                    ))}
            </Grid> 
        </Grid>
    )
}

export default ItemList;