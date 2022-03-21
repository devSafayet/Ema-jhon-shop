import React from 'react';
import { ButtonGroup, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header justify-content-around align-items-center d-flex'>
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
            </div>
        </nav>


    );
};

export default Header;