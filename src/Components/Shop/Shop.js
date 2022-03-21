import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setPorduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPorduct(data))
    }, []);
    return (
        <div className="Shop-container">
            <div className="products-container">
                {
                    product.map(product =>
                        <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="card-container">
                <h2>order sammary</h2>
            </div>
        </div>
    );
};

export default Shop;