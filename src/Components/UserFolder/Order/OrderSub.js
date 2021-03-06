import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './OrderSub.css';

const OrderSub = () => {
    const {name} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const orderData = {...data};
        fetch('https://agile-ravine-23942.herokuapp.com/adduserorder',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('New Order successfully added!');
            }
        })
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.name}  ref={register({ required: true })} placeholder="your Name/Company name" /><br/>
    
                    <input name="email" defaultValue={loggedInUser.email}  ref={register({ required: true })}placeholder="Email Address" /><br/>
                    
                    <input name="project" defaultValue={name} ref={register({ required: true })} placeholder="Project name" /><br/>

                    <input name="description"  ref={register({ required: true })} placeholder="Description" /><br/>
                    
                    <input name="price"  ref={register({ required: true })} placeholder="price" /><br/>
                    
                    <input type="submit" />
                </form>
        </div>
    );
};

export default OrderSub;