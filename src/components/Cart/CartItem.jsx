import React from 'react'

export default function CartItem({item, value}) {
    const {id, img, title, price, total, count} = item;
    const {increment, decrement, removeItem} = value
    return (
        <div className="container-fluid">
            <div className="row mt-2 text-capitalize text-center">
                <div className="col-10 col-lg-2 ">
                    <img src={img} alt="" className='img-fluid' style={{width:'5rem' , height:'5rem'}}/>  
                </div>
                <div className="col-10 col-lg-2 ">
                    <span className='d-lg-none'> Product : </span> {title}   
                </div> 
                <div className="col-10 col-lg-2 ">
                    <span className='d-lg-none'> Price : </span> {price}   
                </div>
                <div className="col-10 col-lg-2 ">
                   <span> <button className="btn btn-outline-dark mx-1" onClick={()=>decrement(id)}>-</button> </span> 
                   <span> <button className="btn btn-outline-dark mx-1">{count}</button> </span> 
                   <span> <button className="btn btn-outline-dark mx-1" onClick={()=>increment(id)}>+</button> </span>    
                </div>
                <div className="col-10 col-lg-2">
                    <button className="btn-outline-warning" onClick={()=>removeItem(id)}>Remove</button>   
                </div>
                <div className="col-10 col-lg-2 ">
                    <span className=''> Item total : $ </span> {total}   
                </div>
            </div>    
        </div>
    )
}
