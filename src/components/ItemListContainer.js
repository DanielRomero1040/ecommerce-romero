import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router";


export default function ItemListContainer({name}){
    const [productos, setProductos] = useState([]);
    let {categoryId} = useParams();

    const traerProductos = () => {
        setProductos([]);
        if(categoryId){
            fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`)
            .then(response => response.json())
            .then(data => {
                setProductos(data.results);
            });
        }else{
            fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1144`)
            .then(response => response.json())
            .then(data => {
                setProductos(data.results);
            });
        }
    };

    useEffect(() => {
      traerProductos();
    }, [categoryId]);

    return(        
        <Grid container justify="center" className="">
            {productos.length === 0? (
                <Grid container direction="column" alignItems="center" style={{paddingTop:100}}>
                    <CircularProgress/> 
                </Grid>
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