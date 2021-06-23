import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import ItemCount from "./ItemCount";


const Item = (element) =>{


    return(
        <Grid item >
            <Paper style={{height:460, width: 350, marginBottom: 20, borderRadius: 20, backgroundColor: '#dce8df'}}>
                <div key={element.objeto.id} className="">                    
                    <img style={{borderTopLeftRadius: 20, borderTopRightRadius:20}}  src={element.objeto.picture} alt=""/>                    
                    <div >
                        <h4 className="">
                        {element.objeto.title}
                        </h4>
                        <h5>
                            {element.objeto.price}
                        </h5>
                    </div>
                    <div>                        
                        <ItemCount stock={10} initial={1} onAdd={()=>{alert("se agrega al carrito")}} />                                                     
                    </div>
                </div>
            </Paper>            
        </Grid>
    )
}

export default Item;