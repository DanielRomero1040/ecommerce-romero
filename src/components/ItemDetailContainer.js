import React,{useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";



const getItems = () => {  
        return  fetch('https://mocki.io/v1/ae8fee15-0e70-4eaa-a54c-ab9ce2453e76')
};

export default function ItemDetailContainer(){
    const [items, setItems] = useState([]);
    
    useEffect(() => { 
        setTimeout( ()=>{       
            console.log("getItems",getItems())
            getItems()
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                setItems(data);}) 
        },2000 )    
    }, []);

    return(        
        <Grid container  justify="center" className="">
            {items.length === 0? (
                <Grid container direction="column" alignItems="center" style={{paddingTop:100}}>
                    <Grid item xs={12}>
                        <CircularProgress />
                    </Grid>
                </Grid>
            ):(            
                <>
                    <Grid item xs={false} sm={1}/>       
                    <Grid item xs={12} sm={10}>
                        <ItemDetail objeto={items}/>
                    </Grid>
                    <Grid item xs={false} sm={1}/>
                </>
            )}            
        </Grid>
    );
};