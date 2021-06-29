import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";


const ItemDetail = (element) =>{


    return(
        <Grid item >
            <Paper style={{height:400, width: 350, marginBottom: 20, borderRadius: 20, backgroundColor: '#dce8df'}}>
                <div  className="">                    
                    <img style={{borderTopLeftRadius: 20, borderTopRightRadius:20, height:280, width: 350}}  src={element.objeto.thumbnail} alt=""/>                    
                    <div >
                        <h4 className="">
                        {element.objeto.title}
                        </h4>
                        <h5>
                            {element.objeto.price}
                        </h5>
                    </div>

                </div>
            </Paper>            
        </Grid>
    )
}

export default ItemDetail;