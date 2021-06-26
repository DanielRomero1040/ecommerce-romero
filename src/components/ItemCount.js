import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircle from "@material-ui/icons/AddCircle";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import { TextField } from "@material-ui/core";

const ItemCount = ({stock, initial, onAdd, id}) => {
    const [count, setCount] = useState(initial);

    const handleChange = (event) => {
        event.target.value > stock ? alert("no puede ser mayor que el stock") : setCount (Number(event.target.value))
         
    }

    const addCount = () => {
        if( count < stock ){
            setCount(count + 1);
        }
    };
    const substractCount = () => {
        if( count > 1 ){
            setCount(count - 1);
        }
    };
    return(
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex" style={{width:150, height:40, marginBottom:2}}>
                <IconButton
                size="medium"
                variant="contained"
                color="secondary" 
                onClick={substractCount}><RemoveCircle /></IconButton>
                
                
                <TextField id={id} value={count} onChange={handleChange} label=""  variant="outlined" size="small"/>

                <IconButton
                size="medium" 
                variant="contained"
                color="primary"
                onClick={addCount}><AddCircle /></IconButton>
            </div>
            <Button
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
            color="primary"
            onClick={count > 0 ? onAdd: "no sucede nada"} > 
            Agregar al carrito 
            </Button>

        </div>
    );
};

export default ItemCount;