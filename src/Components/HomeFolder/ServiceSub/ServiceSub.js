import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceSub.css';

const ServiceSub = (props) => {
    const {name, description, img} = props.data;
    return (
        <div className="col-md-4 col-sm-6 service">
            <Link to="/user/order"><img src={img} height="60px" alt=""/></Link>  
            <Link to={"/user/order/"+name}><h5>{name}</h5></Link>
            <p>{description}</p>
        </div>
    );
};

export default ServiceSub;