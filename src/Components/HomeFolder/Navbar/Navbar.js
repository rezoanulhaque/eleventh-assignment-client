import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg pt-5 container">
            <Link to="/home">
                <img src={logo} width="200" height="30" alt="" loading="lazy"/>
            </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active ml-4">
                            <Link class="text-white" to="/home">Home</Link>
                        </li>
                        <li class="nav-item active ml-4">
                        <Link class="text-white" to="/home">Our Portfolio</Link>
                        </li>
                        <li class="nav-item active ml-4">
                        <Link class="text-white" to="/home">Our Team</Link>
                        </li>
                        <li class="nav-item active ml-4">
                        <Link class="text-white" to="/home">Contact Us</Link>
                        </li>
                        <li class="nav-item active ml-4">
                            <Link class="text-white" to="/login"><span>Login</span></Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
};

export default Navbar;