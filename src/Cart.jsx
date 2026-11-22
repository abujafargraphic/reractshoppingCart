
import { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart(){
    const {cart, setCart} = useContext(CartContext);

    return(
        <div>
      {
        cart.map(item => (
            <div key={item.id}> 
            <span>{item.name}</span>
            <span>{item.price}</span>
            </div>
        ))
      }

        <span>{cart.length}</span>
     
        </div>
    )

}

export default Cart;