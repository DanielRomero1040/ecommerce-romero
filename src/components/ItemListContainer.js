import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";


export default function ItemListContainer({name}){
    const [productos, setProductos] = useState([]);
    let {categoryId} = useParams();

    const traerProductos = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`)
        .then(response => response.json())
        .then(data => {
            console.log("data", data)
            setProductos(data.results);
        });        
    };

    useEffect(() => {
      traerProductos();
    }, [categoryId]);

    return(        
        <Grid container justify="center" className="">
            {productos.length === 0? (
                <Grid container direction="column" alignItems="center" style={{paddingTop:100}}>
                    <CircularProgress/>
                    <Typography variant="h6" >
                        <Button>
                            Selecciona una Categoría en el menú
                        </Button>
                    </Typography>
                    
                </Grid>
            ):(  
                <>   
                    <Grid item xs={false} sm={1}/>       
                    <Grid item xs={12} sm={10}>
                        <ItemList array={productos} category={categoryId}/>
                    </Grid>
                    <Grid item xs={false} sm={1}/>
                </>
            )}            
        </Grid>
    );
};