
import React from 'react';
import Compenent from './Compenent.js';

export default function ProductList(props) {

    //const choices= () => {""};
    //console.log(props)
  //  prompt("hi");

    return (       
props.productList.map((product,a)=>{

return <Compenent product={product} key={a} IncrementQuantity={props.IncrementQuantity} index={a} 
DecrementQuantity={props.DecrementQuantity} 


/>
}
)
       

    )
}
