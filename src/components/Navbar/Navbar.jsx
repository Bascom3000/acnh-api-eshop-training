import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react'
import '../Navbar/navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='eshopTitle'>
                <Link to='/'><h1>Boutique Nook</h1></Link>
            </div>

            <div className='links'>
                <Link to='/cart'> <ShoppingCart size={24}/> </Link>
            </div>
        
        </div>
);
};

export default Navbar;