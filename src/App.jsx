import { useState , useEffect} from 'react';
import { CartContext } from './CartContext';
import './App.css';
import Cart from './Cart';
import Book from './Book';
import Store from './Store';
import Items from './Items';
import Form from './Form';
import Product from './Product';
import { bookContext } from './BookContext';
function App() {
      const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("carts");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("carts", JSON.stringify(cart));
    }, [cart]);

    const [book, Setbook] = useState(() => {
      const savedBook = localStorage.getItem("books")
      return savedBook ? JSON.parse(savedBook): [];
    })


    useEffect(() => {
     localStorage.setItem("books", JSON.stringify(book))
    },[book])
  return(
    <> 
    <bookContext.Provider value={{book, Setbook}}> 
    <CartContext.Provider value={{cart, setCart}}>
  <h1>My React Practice</h1>
  <Cart/>
  <Product/>
</CartContext.Provider>
{/*<Book/>*/}
<Store/>
</bookContext.Provider>
<Items/>
<Form/>
  </>
  )
}

export default App;
