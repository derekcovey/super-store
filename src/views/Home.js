import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {


    return (
        <div className="home">
            <div className="home__product-list">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default Home;