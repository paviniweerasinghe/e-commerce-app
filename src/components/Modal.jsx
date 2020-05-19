import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import './Product.css';

export default class Modal extends Component {
    render() {
        return (
            <div>
                <ProductConsumer> 
                    {(value) => {
                        const {modalOpen, closeModal} = value;    
                        const {img, title, price} = value.modalProduct;

                        if(!modalOpen){
                            return null;
                        }

                        else {
                            return (
                                <div> 
                                    <div  className="container-fluid modal">
                                        <div id='modal' className="row " >
                                            <div className="   col-md-12 mx-auto text-center text-capitalize pt-5">
                                                <h5> Item added to the cart </h5> 
                                                <img src={img} alt="modal-img" className='img-fluid'/>
                                                <h5> {title} </h5>
                                                <h5 className="text-muted"> Price : ${price} </h5>
                                                <Link to='/'> 
                                                    <button className="btn btn-outline-primary"
                                                            onClick={()=>closeModal()}> Continue Shopping</button>
                                                </Link>
                                                <br/>
                                                <Link to='/cart'> 
                                                    <button className="btn btn-outline-warning mt-2 mb-5"
                                                            onClick={()=>closeModal()}> add to cart</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
