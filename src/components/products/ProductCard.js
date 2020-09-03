import React from 'react'
import ApiManager from '../../api/ApiManager'

export default function ProductCard(props) {

    const handleDelete = () => {
        ApiManager.deleteProduct(props.product.id).then(props.getProducts).then(props.history.push('/products'))
    }

    return (
        <>
            <div>
                <h2><a href={`/products/${props.product.id}`}> {props.product.title}</a></h2>
                <p>{props.product.description}</p>
                <p>{props.product.price}</p>
                <p>{props.product.location}</p>
                {props.customer ?
                    < button onClick={handleDelete}>
                        Delete
                </button>
                    : null}
            </div>
        </>
    )
}