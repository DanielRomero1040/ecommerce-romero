import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";


export default function ItemListContainer({name}){
    const [productos, setProductos] = useState([]);

    const traerProductos = () => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055')
        .then(response => response.json())
        .then(data => {
            console.log("data", data)
            setProductos(data.results);
        });        
    };

    useEffect(() => {
      traerProductos();
    }, []);

    return(        
        <Grid container justify="center" className="">
            {productos.length === 0? (
                <>
                    <CircularProgress style={{paddingTop:100}}/>
                </>
            ):(  
                <>   
                    <Grid item xs={false} sm={1}/>       
                    <Grid item xs={12} sm={10}>
                        <ItemList array={productos}/>
                    </Grid>
                    <Grid item xs={false} sm={1}/>
                </>
            )}            
        </Grid>
    );
};