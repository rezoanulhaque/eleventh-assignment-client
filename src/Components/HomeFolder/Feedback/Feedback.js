import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import service1 from '../../../icons/service1.png';
import service2 from '../../../icons/service2.png';
import service3 from '../../../icons/service3.png';
import FeedbackSub from '../FeedbackSub/FeedbackSub';

const commentdata = [
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

const Feedback = () => {
    const [feedBack, setFeedBack] = useState([]);
    useEffect (()=>{
        fetch('https://agile-ravine-23942.herokuapp.com/userComment')
        .then(res => res.json())
        .then(data => setFeedBack(data))
    },[])
    return (
        <div className="container">
        <div className="row">
            {
                feedBack.map(data => <FeedbackSub data={data}></FeedbackSub>)
            }
        </div>
        </div>
    );
};

export default Feedback;