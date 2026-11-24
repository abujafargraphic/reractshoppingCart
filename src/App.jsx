import { useState , useEffect} from 'react';
import { CartContext } from './CartContext';
import './App.css';
import Cart from './Cart';
import Product from './Product';
function App() {
      const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("carts");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("carts", JSON.stringify(cart));
    }, [cart]);

  return(
    <CartContext.Provider value={{cart, setCart}}>
  <h1>My React Practice</h1>
  <Cart/>
  <Product/>
</CartContext.Provider>
  )
}

export default App;
