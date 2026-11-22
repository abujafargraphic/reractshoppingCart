import { CartContext } from "./CartContext";
import { useContext } from "react";

function Product(){
    const {cart, setCart} = useContext(CartContext)

    const product = {
  id: 1,
  name: "Laptop",
  price: 500
};

function addToCart(product) {
    setCart(prev => [...prev, product]);
}
function removefromCart(id){
    setCart( prev => prev.filter(item => item.id !== id))
}
    return(
        <div>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button onClick={ () => addToCart(product)}>add to cart</button>
            <button onClick={ () => removefromCart(product.id)}>delete </button>


        </div>
    );
}

export default Product;