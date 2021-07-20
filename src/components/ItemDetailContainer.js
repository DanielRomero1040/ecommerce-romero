import React,{useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router";




export default function ItemDetailContainer(){
    const [items, setItems] = useState([]);
    let {productoId} = useParams();
    
    
    useEffect(() => { 
        
        const getItems = () => {  
                return  fetch(`https://api.mercadolibre.com/items/${productoId}`)
        };
    
        getItems()
        .then(response => response.json())
        .then(data => {
            setItems(data)                
            }) 
            
    }, [productoId]);

    return(        
        <Grid container  justify="center" className="" style={{minHeight:"53vh"}}>
            {items.length === 0? (
                <Grid container direction="column" alignItems="center" style={{paddingTop:100}}>
                    <Grid item xs={12}>
                        <CircularProgress />
                    </Grid>
                </Grid>
            ):(            
                <Grid>
                    <Grid item xs={false} sm={1}/>       
                    <Grid item xs={12} sm={10}>
                        <ItemDetail objeto={items}/>
                    </Grid>
                    <Grid item xs={false} sm={1}/>
                </Grid>
            )}            
        </Grid>
    );
};