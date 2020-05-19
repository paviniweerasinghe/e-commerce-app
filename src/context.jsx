import React, { Component } from 'react';
import {storeProducts} from './data';
import {detailProduct} from './data';

const ProductContext = React.createContext();


 class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct : detailProduct,
        cart : [],
        modalOpen : false,
        modalProduct : detailProduct,
        cartTotal:0,
        cartSubTotal:0,
        cartTax:0
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let temProducts = [];
        storeProducts.forEach(item => {
           const singleItem = {...item};
           temProducts = [...temProducts, singleItem];
        });
        this.setState(() => {
            return {products:temProducts};
        })
    }

//    getItem = id => {
//         const productid = this.state.products.find(item => item.id === id);
//         return productid;
//    }


//    handleDetail = id => {
//         const product = this.getItem(id);
//         this.setState(() => {
//            return {detailProduct:product}
//        })

    handleDetail = id => {
        const product = this.state.products.find(item => item.id === id);
        this.setState({
        detailProduct : product
    })
   }
    
    
    cartHandler = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.state.products.find(item => item.id === id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1 
        const price = product.price
        product.total = price
        this.setState({
            products : tempProducts,
            cart : [...this.state.cart , product]
        },
        () => {this.addTotals()}
        )
    }


    openModal = (id) => {
        const product = this.state.products.find(item => item.id === id);                        
        this.setState ({
            modalOpen : true,
            modalProduct : product
        })
    }    


    closeModal = () => {
        this.setState ({
            modalOpen : false
        })
    }


    increment = (id) => {
        let tempcart = [...this.state.cart];
        const productSelecetd = tempcart.find(item => item.id === id);
        const index = tempcart.indexOf(productSelecetd);
        const product = tempcart[index]
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState({
            cart : [...tempcart]
        }, ()=>{this.addTotals()})
        
    }


    decrement = (id) => {
        let tempcart = [...this.state.cart];
        const productSelecetd = tempcart.find(item => item.id === id);
        const index = tempcart.indexOf(productSelecetd);
        const product = tempcart[index]
        product.count = product.count - 1;
        if (product.count === 0){
            this.removeItem(id)
        }
        else {
            product.total = product.count * product.price;
        }
        this.setState({
            cart : tempcart
        }, ()=>this.addTotals())
    }


    removeItem = (id) => {
        let tempcart = [...this.state.cart];
        tempcart = tempcart.filter(item => id !== item.id);

        let tempProducts = [...this.state.temProducts];
        const index = tempProducts.indexOf(this.state.products.find(item => item.id === id));
        let removedProduct = tempProducts[index];
        removedProduct.count = 0;
        removedProduct.total = 0;
        removedProduct.inCart = false;

        this.setState({
            cart : [...tempcart],
            products : [...tempProducts]
        }, ()=> {this.addTotals()})
        }


    clearCart = () => {
        this.setState({
            cart : [],
        }, () => {this.setProducts()
                  this.addTotals()} )
    }


    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => subTotal = subTotal + item.total);
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState({
            cartSubTotal : subTotal,
            cartTax : tax,
            cartTotal : total
        })
    }




    render() {
        return (
            <div>
                <ProductContext.Provider value={{
                    ...this.state,
                    cartHandler : this.cartHandler,
                    handleDetal : this.handleDetail,
                    openModal : this.openModal,
                    closeModal : this.closeModal,
                    increment : this.increment,
                    decrement : this.decrement,
                    removeItem : this.removeItem,
                    clearCart : this.clearCart,
                    addTotals : this.addTotals
                }}> 
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider , ProductConsumer};