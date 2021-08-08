import React,{useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router";

//firebase
import { getFirestore } from "../firebase/";

export default function ItemDetailContainer(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    let {productoId} = useParams(); 
    
    const getProduct = () => {
        const db = getFirestore();        
        const itemCollection = db.collection("items").where('id', '==',productoId);
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            }else{
                let value = querySnapshot.docs.map(doc => doc.data())[0]
                setItems(value)
            }
        }).catch(error => {
            console.log('error', error)
        }).finally(()=>{
            setLoading(false);
        })
    }
    
    useEffect(() => { 
        setLoading(true);
        getProduct()
    }, [productoId]);

    return(        
        <Grid container  justify="center" className="" style={{minHeight:"53vh", paddingTop: 25, paddingBottom: 25}}>
            {loading? (
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