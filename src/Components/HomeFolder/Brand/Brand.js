import React from 'react';
import airbnb from '../../../logos/airbnb.png';
import google from '../../../logos/google.png';
import netflix from '../../../logos/netflix.png';
import slack from '../../../logos/slack.png';
import uber from '../../../logos/uber.png';
import './Brand.css';

const Brand = () => {
    return (
        <div className="container">
        <div className="row m-5">
            <img className="brandimg" src={airbnb} alt=""/>
            <img className="brandimg" src={google} alt=""/>
            <img className="brandimg" src={netflix} alt=""/>
            <img className="brandimg" src={slack} alt=""/>
            <img className="brandimg" src={uber} alt=""/>
            </div>   
        </div>
    );
};

export default Brand;