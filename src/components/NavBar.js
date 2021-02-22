import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return(
        <nav className="nav-bar">
            <h1>Super Store</h1>

            <div className="nav-bar__links">
                <Link
                    to='/'
                    className="nav-bar__link"
                >
                    Home
                </Link>
                <Link
                    to='/deals'
                    className="nav-bar__link"
                >
                    Deals
                </Link>
                <Link
                    to='/cart'
                    className="nav-bar__link"
                >
                    Cart
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;