import React, { components, useState} from "react";

export default function ItemCount(){
    const [count,setCount] = useState(0);

    return(
        <div>
            <button>+</button>
            <input>{count}</input>
        </div>
    );
};