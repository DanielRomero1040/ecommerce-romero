import React,{useState, useEffect} from "react";
import Item from "./Item";
import { CircularProgress } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
        }, 3000)
    }
)}

const ItemList = () => {
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
        <>
            {productos.length === 0? (
                <>
                    <CircularProgress />
                    {console.log(".legth es 0",productos)}
                </>
            ):(
                <>
                    {console.log("termino la promesa",productos)}
                    <h1>termina la promesa</h1>
                    {productos.map((element)=>(   
                        <Grid container spacing={2} justify="center">                            
                            <Item objeto={element} key={element.id}/>                            
                        </Grid>                     
                    ))}
                </>
            )}
        </>
    )
}

export default ItemList;