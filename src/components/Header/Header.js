import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my react website</h1>

            <nav className='menu'>
                <a href="/Home">Home</a>
                <a href="/Shop">Shop</a>
                <a href="/About">About us</a>
            </nav>
        </div>
    );
};

export default Header;