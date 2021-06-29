import React,{useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";




export default function ItemDetailContainer(){
    const [productos, setProductos] = useState([]);

    async function obtenerProductos(){
        const respuesta = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055");
        const data = await respuesta.json();
        console.log("ultima prueba" ,respuesta);
        setProductos([...data.results]);
    }
    useEffect(() => {
        obtenerProductos();
        
    }, []);

    return(        
        <Grid container justify="center" className="">
            {productos.length === 0? (
                <>
                    <CircularProgress />
                </>
            ):(            
                <Grid container>
                        {productos.map((element)=>(   
                        <ItemDetail objeto={element} key={element.id}/>                            
                        ))}
                </Grid>
            )}            
        </Grid>
    );
};