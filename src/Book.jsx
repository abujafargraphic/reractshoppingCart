import { useContext } from "react";
import { bookContext } from "./BookContext";


function Book(){
  let {book, Setbook} = useContext(bookContext)

  function reducebookQuantity(id){
  console.log("Item received:", id);

    Setbook(prev => 
      
      { 
        
        const findItem = prev.find(item =>  item.id === id);
     if(findItem.quantity === 1){
      return prev.filter(item => item.id !== id)   
     } 
     return prev.map(foundObject => {

          return foundObject.id === id 
          
         ? {...foundObject, quantity: foundObject.quantity - 1} 
        : foundObject
     })
    
   } )
  };

  let totalPrice = book.reduce((total, item) => {
    return total + item.price * item.quantity
}, 0);


  let totalQuantity = book.reduce((total, item) => {
    return total +  item.quantity
}, 0);
console.log(totalQuantity)

 function deleteBook(id){
    Setbook(prev => prev.filter(item => item.id !== id))
 }
  
 function clearBookCart(){
  
    Setbook([])
    
  
}
  return(
    <div>
      {
        book.map(item => 
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
            <span>subtotal: {item.price * item.quantity}</span>


      <button onClick={ () => reducebookQuantity(item.id)}>reduce book</button>
      <button onClick={ () => clearBookCart(item.id)}>clear bookCart</button>
        

          </div>
        )
      }
      <h3>totalPrice:{totalPrice}</h3>
      <h3>totalQuantity:{totalQuantity}</h3>

      {
        book.length > 0 &&
        <span>cart:{book.length}</span> 
      }  
             {
       totalQuantity === 0 &&
    <span>the cart is empty</span>
} 
           {
       totalQuantity > 0 &&
    <span>you have {totalQuantity} books in your cart</span>
}
    </div>
  )
}

export default Book;