import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColums';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component {
    render() {
        return (
            <>
                <ProductConsumer> 
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <div>
                                    <Title name='Your' title='Cart' />
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                </div>
                            )
                        }
                        else {
                            return (
                                <EmptyCart/>
                            )
                        }
                    }}
                </ProductConsumer>               
            </>          
        )
    }
}
