import React, {useState, useContext} from 'react';
import InputsForm from './InputsForm';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import {generateOrder} from "../firebase/";
import {CartContext} from "../context/CartContext";
import { Order } from './Order';


const inputs = [
    {
        name: 'name',
        label: 'Nombre',
        type: 'text'
    },
    {
        name: 'lastName',
        label: 'Apellido',
        type: 'text'
    },
    {
        name: 'phone',
        label: 'Telefono',
        type: 'tel'
    },
    {
        name: 'email',
        label: 'email',
        type: 'email'
    },
    {
        name: 'age',
        label: 'Edad',
        type: 'number'
    }
]

const verificarData = objeto =>{
    const keyObject = Object.keys(objeto)
    let existeData = keyObject.reduce((acum, item)=>{
        if(objeto[item]===''){
            return [...acum, false]
        }else{
            return [...acum, true]
        }        
    },[]);
    return existeData.indexOf(false) > -1;
}

export const FormBuyContainer = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        age: ''
    });
    const [isGenerate, SetIsGenerate] = useState(false);
    const [temporalCart, setTemporalCart] = useState()
    const [orderId, SetOrderId] = useState('');
    const {cart, total, clear} = useContext(CartContext);

    const handlerEvents = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }
    return (
        <Grid container justify="center" className="" style={{minHeight:"53vh", paddingTop: "10vh"}}>
            <Grid item xs={false} sm={1}/>       
            <Grid container item xs={12} sm={5}>
                {
                    inputs.map((el)=>(
                        <Grid item key={el.name} sm={10}>
                            <InputsForm name={el.name} label={el.label} value={formData[el.name]} handlerEvents={handlerEvents} disable={isGenerate} type={el.type}/>
                        </Grid>
                    ))
                } 
                <Grid item  sm={10}>
                    <Button
                        disabled={verificarData(formData) || isGenerate}                     
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={()=> {
                            generateOrder(formData, cart, total ).then(({id})=>{
                                SetOrderId(id);
                            });
                            SetIsGenerate(!isGenerate);
                            setTemporalCart([...cart])
                            clear()
                        }}
                        style={{marginTop:20, marginBottom:20}} 
                        > 
                        Generar Orden 
                    </Button>
                </Grid>               
            </Grid>
            <Grid container item xs={12} sm={5}>
                {isGenerate===true? (
                    <Order orderId={orderId} formData={formData} cart={temporalCart} total={total}/>
                ):(
                    <p>Ingrese sus datos para finalizar su compra y generar su orden.</p>
                )}
            </Grid>
            <Grid item xs={false} sm={1}/>
        </Grid>
    )
}