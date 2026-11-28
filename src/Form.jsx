import { useState, useEffect } from "react";
function Form(){
  const [products, setProducts] = useState(() => {
  const savedProducts = localStorage.getItem("products");

  return savedProducts ? JSON.parse(savedProducts) : [];
});

useEffect(() => {
  localStorage.setItem("products", JSON.stringify(products));
}, [products]);


const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [error, setError] = useState("");
const [editingId, setEditingId] = useState(null);


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


  if (editingId !== null) {
   setProducts(prev =>
  prev.map(item =>
    item.id === editingId
      ? { ...item, name: name, price: Number(price) }
      : item
  )
);
} else {
  setProducts( prev => [...prev, {...newProduct}])
 setName("");
setPrice("");
}

 setName("");
  setPrice("");
  setEditingId(null);

 
  ;

  
  // We'll create and add our product here.
}



 function deleteProduct(id) {
  setProducts(prev => prev.filter(item => item.id !== id));
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

    <button type="submit">
  {editingId !== null ? "Update Product" : "Add Product"}
</button>
  </form>
 {error && <p>{error}</p>}
  {products.map(item => (
    <div key={item.id}> 
   <span>{item.name}</span>
   <span>{item.price}</span>
   <button onClick={ () => deleteProduct(item.id)}>delete</button>
   <button onClick={() => {
     setEditingId(item.id)
     setName(item.name)
     setPrice(String(item.price));
   }
  }>
      Edit
    </button>
   </div>
))}

</>
);
    
}

export default Form;