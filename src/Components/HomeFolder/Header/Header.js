import React from 'react';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div style={{backgroundColor:'#fbd062'}}>
            <Navbar></Navbar>
            <HeaderContainer></HeaderContainer>
        </div>
    );
};

export default Header;