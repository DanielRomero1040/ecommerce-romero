import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircle from "@material-ui/icons/AddCircle";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const addCount = () => {
        if( count < stock ){
            setCount(count + 1);
        }
    };
    const substractCount = () => {
        if( count > 0 ){
            setCount(count - 1);
        }
    };
    return(
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex">
                <IconButton
                size="large"
                variant="contained"
                color="secondary" 
                onClick={substractCount}><RemoveCircle /></IconButton>
                
                <p>{count}</p>

                <IconButton
                size="large" 
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