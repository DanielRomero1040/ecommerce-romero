import {createContext, useState} from "react";

export const CartContext = createContext();

const CartCustomProvider = ({children}) =>{
    const [cart,setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addItemToCart = ( element, value)=>{
        if(isInCart(element.objeto.id)){
            if(element.objeto.available_quantity < value){
            }
            console.log('no se agrega al carrito')
        }else{
            setCart([...cart,{"item": element.objeto , "quantity":value}])
        }        
    }

    const addOneItem = (id) => {
        let index = cart.findIndex( el => el.item.id === id)
        if(cart[index].quantity < cart[index].item.available_quantity){
            cart[index].quantity += 1      
            setCart([...cart])
        }        
    }

    const substractOneItem = (id) => {
        let index = cart.findIndex( el => el.item.id === id)
        if(cart[index].quantity > 1){
            cart[index].quantity -= 1      
            setCart([...cart])
        }        
    }

    const removeItem = (id)=>{
        let newArray = cart.filter( el => el.item.id !== id);        
        setCart(newArray)
    }
    
    const clear = ()=>{
        setCart([])
    }

    const isInCart = (id)=>{
        let idItem = cart.find( el => el.item.id === id);
        return idItem
    }    

    return(
        <CartContext.Provider value={{cart, addItemToCart, removeItem, clear, total, setTotal, addOneItem,substractOneItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartCustomProvider;
