import React from 'react';
import { useForm } from 'react-hook-form';

const Footer = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const orderData = { ...data };
        fetch('https://agile-ravine-23942.herokuapp.com/anonymousReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('New Order successfully added!');
                }
            })
    }
    return (
        <section style={{ backgroundColor: '#fbd062', paddingTop: '20px' }}>
            <div className="container" >
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h1>Let us handle your project, professionaly.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem facilis dicta unde, amet accusantium veritatis.</p>
                    </div>
                    <div className="col-md-6 col-sm-12">

                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" ref={register({ required: true })} placeholder="your Name/Company name" /><br />

                            <input name="email" ref={register({ required: true })} placeholder="Email Address" /><br />

                            <input name="pmessage" ref={register({ required: true })} placeholder="Your message" /><br />

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;