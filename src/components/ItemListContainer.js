import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";

const obtenerProductos = () => {
    return new Promise ( (resolve, reject) =>{
        setTimeout( ()=>{
            resolve(
                [{id: 1, title:"Gato1",  price: 5000,  picture: "http://placekitten.com/g/350/300"},
                {id: 2,  title:"Gato2",  price: 10000, picture: "http://placekitten.com/g/350/300"},
                {id: 3,  title:"Gato3",  price: 15000, picture: "http://placekitten.com/g/350/300"},
                {id: 4,  title:"Gato4",  price: 4500,  picture: "http://placekitten.com/g/350/300"},
                {id: 5,  title:"Gato5",  price: 3200,  picture: "http://placekitten.com/g/350/300"},
                {id: 6,  title:"Gato6",  price: 2750,  picture: "http://placekitten.com/g/350/300"},
                ]
            )
        }, 1000)
    }
)}

export default function ItemListContainer({name}){
    const [productos, setProductos] = useState([]);

    const traerProductos = () => {
        obtenerProductos().then(
            (data) => {
            const arrayProductos = [...data];
            setProductos(arrayProductos);
            }
        )
    };

    useEffect(() => {
      traerProductos();
    }, []);

    return(        
        <Grid container justify="center" className="">
            {productos.length === 0? (
                <>
                    <CircularProgress />
                </>
            ):(            
                <Grid item xs={12}>
                    <ItemList array={productos}/>
                </Grid>
            )}            
        </Grid>
    );
};