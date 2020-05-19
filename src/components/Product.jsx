import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import './Product.css';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product
            return (               
                    <div className="col-9 col-md-6 col-lg-3 mx-auto py-5">
                        <div className="card">
                            <ProductConsumer> 
                                {value => {
                                    return (
                                        <div className="img-container p-2" onClick={() => value.handleDetal(id)} >
                                    <Link to='/details'> <img className="card-img-top" src={img} alt='product' /> </Link>
                                    <button className='cart-btn'
                                            disabled={inCart ? true : false}
                                            onClick={() => {value.cartHandler(id)
                                                           value.openModal(id)
                                                           }} > 
                                        {inCart ? (<p className='text-capitalize bg-warning' disabled> In cart </p>) : (<p className='text-capitalize'>buy me</p>)} 
                                    </button>
                                </div> 
                                    )
                                }}
                            </ProductConsumer>
                            
                                <div className=" card-footer d-flex justify-content-between ">
                                    <p className='align-self-center mb-0'> {title} </p>
                                    <p className='mr-5 mb-0'> <span> $ {price} </span> </p>
                                </div>
                        </div>              
                    </div>                       
        )
    }
}
