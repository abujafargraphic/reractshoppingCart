import { useState } from "react";
function Form(){
 const [products, setProducts] = useState([]);
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [error, setError] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  if (name.trim() === "" || price === "")
     {
    setError("Please add product name and price");
  return;
}
setError("");

if (Number(price) <= 0) {
  setError("Please enter a valid price");
  return;
}
  const newProduct = 
    {
  id: Date.now(),
  name: name,
  price: Number(price)
}
  ;

  setProducts( prev => [...prev, {...newProduct}])
 setName("");
setPrice("");
  // We'll create and add our product here.
}

return (
    <>
  <form onSubmit={handleSubmit}>
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Product name"
    />

    <input
      type="number"
      min="1"
      value={price}
      onChange={(e) => { setPrice(e.target.value);
        setError("");
      }
    }
      placeholder="Price"
    />

    <button type="submit">Add Product</button>
  </form>
 {error && <p>{error}</p>}
  {products.map(item => (
    <div key={item.id}> 
   <span>{item.name}</span>
   <span>{item.price}</span>
   </div>
))}

</>
);
    
}

export default Form;