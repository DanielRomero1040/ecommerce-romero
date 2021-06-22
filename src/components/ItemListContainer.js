import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer({name}){
    return(
        <div className="d-flex justify-content-center">
            <ItemCount stock={10} initial={1} onAdd={()=>{alert("se agrega al carrito")}} />
            
        </div>
    );
};