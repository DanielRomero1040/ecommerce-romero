import React from "react";
import ItemCount from "./ItemCount.js";

export default function ItemListContainer({name}){
    return(
        <div>
            <h1>
                Bienvenido {name} a la nueva tienda Coder
            </h1>
            <ItemCount/>
        </div>
    );
};