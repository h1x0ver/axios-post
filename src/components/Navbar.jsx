import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className="nav-left">
                <Link to='/' className='nav-item'>LOGO</Link>
            </div>

            <div className="nav-right">
                <Link to='/' className='nav-item'>PRODUCTS</Link>
                <Link to='/' className='nav-item'>ABOUT</Link>
                <Link to='/' className='nav-item'>CONTACTS</Link>
            </div>
        </header>
    );
};

export default Navbar;