import React from "react";

export default function Reloj(props){
    return(
        <p>Hora: {props.date.toLocaleTimeString()} </p>
    );
}
