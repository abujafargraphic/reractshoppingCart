
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

function Cart(){
    const {cart, setCart} = useContext(CartContext);

   
       function decreaseQuantity(id){
    setCart(prev => { const deleteItem
       = prev.find(item => item.id === id)
    if(deleteItem.quantity === 1){
      prev.filter(item => item.id !== id)
    }
    return prev.map(item => item.id === id ?
    {...item, quantity: item.quantity - 1}: item
       );
      
      })
 }
    return(
        <div>
      {
        cart.map(item => (
            <div key={item.id}> 
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>

           <button onClick={ () => 
            decreaseQuantity(item.id)
           }>decreaseQuantity</button>
            </div>
        ))
      }

        <span>{cart.length}</span>
     
        </div>
    )

}

export default Cart;