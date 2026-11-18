import { Fragment } from 'react';
export function ProductList({list}){
   const result = list.find( item => item.id === 2);
   console.log(result)
return( 
    <div>{
    list.filter(item => item.score >= 50).map(item => (
       <div key={item.id}> <p>{item.name}</p>
        <p>{item.score}</p>
       </div>
    ))
    
   
}
</div>
)
}
export default ProductList;

/*  goodStudent.map( (item) => (
        <Fragment key={item.id}>
        <p>{item.score >= 70 ? "Excellent": item.score >= 50 ? "Passed" : "Failed"}</p>
        {item.score >= 70 && <p>Excellent student</p>}
        <div>
            <p>{item.name}</p>
            <p>{item.score}</p>


        </div>
         </Fragment>
    )) */