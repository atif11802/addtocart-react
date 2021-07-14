import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({cartItems}) => {
    return (
        <div className="header">
            <div className="header__left">
            <Link to="/"> <h1>shopping cart</h1> </Link>
              
            </div>
            <div className="header__right">
            <Link to="/cart"><h3>Cart</h3> </Link>
                
                <p>{cartItems.length}</p>
            </div>
        </div>
    )
}

export default Header
