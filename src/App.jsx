import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
function App() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(() => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  return savedCart || [];
});

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const [products, setProducts] = useState([]);

useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json();
    })
    .then(data => {
      setProducts(data.products);
      setIsLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setIsLoading(false);
    });
}, []);

const product = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 300 },
  { id: 3, name: "Tablet", price: 200 }
];

  function addToCart(item) {
  setCart(prev => {
    const existingItem = prev.find(
      cartItem => cartItem.id === item.id
    );
    
    if (existingItem) {
  return prev.map(cartItem =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  )} else{
    return [...prev, { ...item, quantity: 1}];
  
}
    
  });
} 

function removeFromCart(id) {
  setCart(prev => prev.filter(item => item.id !== id));
};

function decreaseQuantity(id) {
  setCart(prev => {
    const existingItem = prev.find(item => item.id === id);

    if (existingItem.quantity === 1) {
      return prev.filter(item => item.id !== id);
    }

    return prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  });
};

 const total = cart.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);
  return (
    <div>
    {
        <div>
    { isLoading ? (
  <p>Loading products...</p>
) : (
    products.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
      </div>
    )))
  }
  </div>

    }
     {
      product.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <button onClick={ () => addToCart(item)}>add to cart</button>
   
        </div>
         
      )

     )
      
           
     }
     {
         cart.map(list => (
              <div key={list.id}>
                <span>{list.name}</span>
            <span>Unit price: ${list.price}</span>
            <span>Quantity: {list.quantity}</span>
            <span>Subtotal: ${list.price * list.quantity}</span>
            <button onClick={() => decreaseQuantity(list.id)}>
               -
           </button>
                <button onClick={() => removeFromCart(list.id)}>
                  Remove
                </button>
               <span>Quantity: {list.quantity}</span>
               <h2>Grand Total: ${total}</h2>
              </div>
         ))
     }
    </div>
  );
}

export default App;

/*
function App() {
  const products = [
  { id: 1, name: "laptop", price: 500 },
  { id: 2, name: "phone", price: 300 },
  { id: 3, name: "tablet", price: 200}

];

  return (
    <div> 
    {
      products.map((item) => {
        <div key={item.id}>
        <h2>{item.name}</h2>
        <p>{item.price}</p>

        </div>
      })
    }
    </div>
  )
}

export default App
*/