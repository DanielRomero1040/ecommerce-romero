import {createContext, useState} from "react";

export const ProductsContext = createContext();

const ProductsCustomProvider = ({children}) =>{
    const [products,setProducts] = useState([]);


    return(
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsCustomProvider;
