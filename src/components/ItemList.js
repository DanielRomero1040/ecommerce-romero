import React from "react";
import Item from "./Item";
import Grid from '@material-ui/core/Grid';

const ItemList = (props) => {
    return(
        <>  
            <h1>Lista de Gatitos</h1>
                <Grid container spacing={2} justify="center">                            
                    {props.array.map((element)=>(   
                        <Item objeto={element} key={element.id}/>                            
                        ))}
                </Grid> 
        </>
    )
}

export default ItemList;