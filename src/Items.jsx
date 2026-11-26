import { useState } from "react"

function Items(){
     const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 300 }
]);
    return(
            <div>
           <input
  value={products[0].price}
  onChange={(e) =>
    setProducts(prev =>
      prev.map(item =>
        item.id === 1
          ? { ...item, price: Number(e.target.value) }
          : item
      )
    )
  }
/>        {  products.map(item => {
            return <div key={item.id}>  <span>{item.name}</span>
                <span>{item.price}</span>
                 </div>
        })
     }
    </div>
    )
}

export default Items;