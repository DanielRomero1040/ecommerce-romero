import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";
import { useParams } from "react-router";
import bannerComputacion from "../assets/MLA1648.jpg"
import bannerCelulares from "../assets/bannerCelulares.jpg"
import bannerConsolas from "../assets/bannerConsolas.jpg"
import bannerHome from "../assets/bannerHome.jpg"
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

    return(        
        <Grid container justify="center" className="" style={{minHeight:"53vh",paddingBottom: 200}}>
            {loading? (
                <Grid container direction="column" alignItems="center" style={{paddingTop:100}}>
                    <CircularProgress/> 
                </Grid>
            ):(  
                <> 
                    <Grid container item xs={12} style={{marginBottom: 20}}>
                        {categoryId === "MLA1051" && <img src={bannerCelulares} alt="banner" style={{width:'98.9vw'}}/>}
                        {categoryId === "MLA1648" && <img src={bannerComputacion} alt="banner" style={{width:'98.9vw'}}/>}
                        {categoryId === "MLA1144" && <img src={bannerConsolas} alt="banner" style={{width:'98.9vw'}}/>}
                        {categoryId === "MLA1010" && <img src={bannerCelulares} alt="banner" style={{width:'98.9vw'}}/>}
                        {!categoryId  && <img src={bannerHome} alt="banner" style={{width:'98.9vw'}}/>}

                    </Grid>  
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