import React from "react";

export default function Reloj(props){
    return(
        <p style={{color: "#736c28"}}>Hora: {props.date.toLocaleTimeString()} </p>
    );
}
