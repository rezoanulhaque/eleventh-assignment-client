import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../../logos/frame.png';
import './HeaderContainer.css';

const HeaderContainer = () => {
    return (
        <div class="container ">
        <div class="row pt-5 pb-5">
            <div class="col-md-5">
                <h1>Let's Grow Your Brand To The Next Label</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus explicabo voluptate?</p>
                <Link class="text-white" to="/login"><span>Hire Us</span></Link>
            </div>
            <div class="col-md-7 pl-5">
                <img class="headerimg" src={picture} alt=""/>
            </div>   
        </div>
        </div>
    );
};

export default HeaderContainer;