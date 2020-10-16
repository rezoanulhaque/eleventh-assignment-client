import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';

const OrderlistSub = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userOrder, setUserOrder] = useState([]);
    useEffect (()=>{
        fetch('https://agile-ravine-23942.herokuapp.com/userOrder?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setUserOrder(data))
    },[])
    return (
        <div>
            {
                userOrder.map(uo=> <div><h5>{uo.project}</h5><br/><p>{uo.description}</p></div>)
            }
        </div>
    );
};

export default OrderlistSub;