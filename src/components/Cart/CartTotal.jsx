import React from 'react';
import {Link} from 'react-router-dom'

export default function CartTotal({value}) {
    const {cartTotal, cartSubTotal, cartTax, clearCart} = value
    return (
        <div>
            <div className="container">
                <div class="card py-4" style={{width: '18rem'}}>
                <div className="row"> 
                    <div className="col-10 mx-auto col-sm-8 text-capitalize text-center">
                        <Link to='/'> 
                            <button className="btn btn-outline-danger mb-2" onClick={()=>clearCart()}>Clear Cart</button>
                        </Link>
                        <h5> <span>sub total :</span>  
                            <strong> ${cartSubTotal}</strong>
                        </h5>
                        <h5> <span>tax :</span>  
                            <strong> ${cartTax}</strong>
                        </h5>
                        <h5> <span>total :</span>  
                            <strong> ${cartTotal}</strong>
                        </h5>
                    </div>
                </div>  
                </div>
            </div>
        </div>
    )
}
