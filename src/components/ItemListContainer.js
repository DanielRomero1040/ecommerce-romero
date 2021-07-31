import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router";

//firebase
import { getFirestore } from "../firebase/";

export default function ItemListContainer({name}){
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    let {categoryId} = useParams();

    const getProducts = (category) => {
        const db = getFirestore();
        const itemCollection = db.collection("items").where('category', '==',category);
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            }else{
                let value = querySnapshot.docs.map(doc => doc.data())
                setProductos(value)
            }
        }).catch(error => {
            console.log('error', error)
        }).finally(()=>{
            setLoading(false);
        })
    }

    useEffect(() => {
        setLoading(true);
        if(categoryId){
            getProducts(categoryId)
        }else{
            const db = getFirestore();
            const itemCollection = db.collection("items");
            itemCollection.get().then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log('no results')
                }else{
                    let value = querySnapshot.docs.map(doc => doc.data())
                    setProductos(value)
                }
            }).catch(error => {
                console.log('error', error)
            }).finally(()=>{
                setLoading(false);
            })        
        }
    }, [categoryId]);

    console.log('productos',productos)

    return(        
        <Grid container justify="center" className="" style={{minHeight:"53vh"}}>
            {loading? (
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