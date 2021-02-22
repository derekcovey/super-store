import React from 'react'

const ProductCard = () => {
    let product = {
        _id: "5fbfff7d58aa65167efb52ae",
        name: "Wilson Evolution Basketball",
        description: "A super bouncy and grippy ball that will get you playing like the pros!",
        price: 65.99,
        avgRating: 4.5,
        isOnSale: false,
        stockCount: 8,
        imageUrl: "https://st-super-store.s3-us-west-2.amazonaws.com/images/wilson_evolution.jpg"
    }

    return(
        <div className="product-card">
            <img src={product.imageUrl} alt="#" className="product-card__image"/>
            <h3 className="product-card__name">{product.name}</h3>
            <div className="product-card__rating">{product.avgRating}</div>
            <h4 className="product-card__price">{"$" + product.price}</h4>
            <div className="product-card__available">{product.isOnSale ? "On Sale" : ""}</div>
            <button className="product-card__view-btn">View Item</button>
        </div>
    )
}

export default ProductCard;