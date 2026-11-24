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
   
    setCart(prev => { 
    const currentProduct = prev.find(item => item.id
         === product.id);

    
         console.log(currentProduct)
    if(currentProduct){
      return prev.map(item => item.id === product.id  ? 
      {...item, quantity: item.quantity + 1} : item )
    } else{
    return [...prev, {...product, quantity : 1}];
      
    
    }
})
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



/* function addToCart(product) {
    setCart(prev => {
        const currentProduct = prev.find(
            item => item.id === product.id
        );

        if (currentProduct) {
            return prev.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            return [...prev, { ...product, quantity: 1 }];
        }
    });
} */