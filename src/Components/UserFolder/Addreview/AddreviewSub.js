import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const AddreviewSub = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const reviewData = {...data};
        fetch('https://agile-ravine-23942.herokuapp.com/addreview',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('New Review successfully added!');
            }
        })
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.name}  ref={register({ required: true })} placeholder="your Name/Company name" /><br/>
    
                    <input name="email" defaultValue={loggedInUser.email}  ref={register({ required: true })}placeholder="Email Address" /><br/>

                    <input name="description"  ref={register({ required: true })} placeholder="Your Comment" /><br/>
                    
                    <input type="submit" />
                </form>
        </div>
    );
};

export default AddreviewSub;