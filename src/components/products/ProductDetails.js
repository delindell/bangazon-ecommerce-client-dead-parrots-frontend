import React, { useState, useEffect } from 'react'

export default function ProductDetails(props) {

    const [product, setProduct] = useState({})

    const getProduct = () => {
        fetch(`http://localhost:8000/products/${props.productId}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(product => {
            console.log(product)
            setProduct(product)
        })
    }
    
    useEffect(getProduct, [])

    const addingToOrder = () => {
        return fetch(`http://localhost:8000/orderproducts`, {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem("bangazon_token")}`
            },
            'body': JSON.stringify({
                product_id: product.id
            })
        }).then(getProduct)
    }

    return (
        <div class="card" style={{ "padding" : "20px", "align-items" : "center", "margin" : "10px" }}>
            <div class="card-body">
            <h2>{product.title}</h2>
            <img src={product.imagePath} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            {product.quantity < 1 ? (
                <p style={{ "color" : "red" }}>Out Of Stock</p>
            )
            : <button onClick={addingToOrder}>Add To Order</button>
            }
        </div>
        </div>
    )
}
