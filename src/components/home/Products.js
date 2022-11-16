import React, { Component } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import './products.css'
class Products extends Component {
    state = {
        Products: []
    }
    constructor() {
        super();
        axios.get('https://dummyjson.com/products').then(res => {
            console.log(res.data.products)
            this.setState({ Products: res.data.products })
        })
    }
    render() {
        return <>
            <div className="products">
                {this.state.Products.map(product => {
                    return (
                        <div className="product-card" key={product.id}>
                            <div className="product-photo">
                            <div className="overlay"><span><i class="far fa-eye"></i></span></div>
                             <img src={product.thumbnail} alt={product.title} />
                             </div>
                            <div className="product-info">
                                <div className="product">
                                    <span className="product-name"> name: {product.title} </span>
                                    <span className="product-brand"> brand: {product.brand} </span>
                                </div>
                                <div className="product-rating">{product.rating}/5</div>
                                <div className="product-price">price: {product.price} $</div>
                                <Link to={"/product/" + product.id}>show details</Link>
                            </div>
                        </div>)
                })
                }
            </div>
        </>
    }
}
export default Products;