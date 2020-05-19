import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer> 
                {(value) => {
                    const {id, title, img, price, company, info, inCart} = value.detailProduct
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue text-slanted" style={{fontSize:'40px'}}>
                                    {title}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <img src={img} alt="" className='img-fluid'/>
                                </div>
                                <div className="col-md-6 py-5">
                                    <h1 className='display-6'> Model : </h1>
                                    <h3> Made by : <span className='text-uppercase'>{company} </span> </h3>
                                    <h3 className="text-blue">Price : ${price}</h3>
                                    <p className="font-weight-bold"> Some info about product : <p className='lead'> {info} </p> </p>  

                                    <Link to='/' >
                                    <button className="btn btn-outline-primary">Back to Products</button>
                                    </Link>
                                    
                                    <button className="btn btn-outline-warning ml-3"
                                            onClick={ ()=> {
                                                value.cartHandler(id);
                                                value.openModal(id);
                                            }}>
                                        {inCart ? 'In Cart' : 'Add to Cart'}
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
