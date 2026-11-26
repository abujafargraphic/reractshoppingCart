import { useContext } from "react";
import { bookContext } from "./BookContext";


function Store(){
    const {book, Setbook} = useContext(bookContext)
const bookStore = [ 
    {   id: 1,
        name: "book",
        price: 50
        

    },
    
  
  { id: 2, 
    name: "book B",
     price: 20}

];

function addBook(item){
    Setbook(prev => { 
        console.log("Current cart:", prev);
  const ExistingItem = prev.find(product => { 
     return product.id === item.id })
   if(ExistingItem){
    return prev.map( product => {
     return product.id === item.id ? {...product, quantity: product.quantity + 1 }
      : product;
    })
   }  
     return [...prev , {...item, quantity: 1}]

    }
    )

};



     return(<div>
        {
            bookStore.map(item =>  
               <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <button onClick={ () => addBook(item)}>add to book cart</button>
                    <button onClick={ () => deleteBook(item.id)}>delete book</button>




                </div>
            
             )
        }
        {
                    <span>{book.length}</span>

        }
 
     </div>
     )
}

export default Store;