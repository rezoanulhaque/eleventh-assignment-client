import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import service1 from '../../../icons/service1.png';
import service2 from '../../../icons/service2.png';
import service3 from '../../../icons/service3.png';
import ServiceSub from '../ServiceSub/ServiceSub';


const servicedata = [
    {
        name: 'web design',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, eum',
        img: service1
    },
    {
        name: 'graphics design',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, eum',
        img: service2
    },
    {
        name: 'web development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, eum',
        img: service3
    }
]

const Service = () => {
    return (
        <div className="container">
        <div className="row">
            {
                servicedata.map(data => <ServiceSub data={data}></ServiceSub>)
            }
        </div>
        </div>
    );
};

export default Service;