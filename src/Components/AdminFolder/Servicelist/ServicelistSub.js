import React, { useEffect, useState } from 'react';

const ServicelistSub = () => {
    const [serviceList, setServiceList] = useState([]);
    useEffect (()=>{
        fetch('https://agile-ravine-23942.herokuapp.com/orderList')
        .then(res => res.json())
        .then(data => setServiceList(data))
    },[])
    return (
        <div>
            {
                serviceList.map(sl=><div className="row" ><p>Customer name: {sl.name}</p><p>Project name:{sl.project}</p></div>)
            }
        </div>
    );
};

export default ServicelistSub;