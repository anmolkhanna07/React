import React from 'react'

export default function (props) {
  return (
    <>
    <div className='row fixed-bottom' >
        <button className='btn btn-danger' text-center onClick={()=>{props.Reset();}} > Reset</button>
    </div>
    <div className='text-center mt-2'>
    <button className='btn btn-danger' text-center > TotalAmount = {props.TotalAmount}</button>
       </div>

    <div className='text-center mt-5'>
<button  className='btn btn-danger' text-center> Pay NOw</button>

    </div>
    </>
  )
  }
