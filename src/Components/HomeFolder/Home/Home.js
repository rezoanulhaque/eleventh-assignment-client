import React from 'react';
import Brand from '../Brand/Brand';
import Carosel from '../Carosel/Carosel';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brand></Brand>
            <Service></Service>
            <Carosel></Carosel>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;