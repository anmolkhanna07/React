import React from 'react'

export default function Compenent(props) {

    
   // function IncrementQuantity(){}
    return (

        <>
            <h2>
                <div className='col-6'>
                    {props.product.Name} <span class="badge bg-secondary col-2 ">₹{props.product.Price}</span>

                </div>
                <div className='col-8'>
                    <button type="button" class="btn btn-primary" onClick={()=>{props.DecrementQuantity(props.index);}}>-</button>
                    <button type="button" class="btn btn-secondary">{props.product.Quantity}</button>
                    <button type="button" class="btn btn-primary" onClick={()=>{props.IncrementQuantity(props.index);}}>+</button>

                    <div className='col-9'>
                        {props.product.Quantity * props.product.Price}

                    </div>

                </div>
            </h2>


        </>

    )
}
