import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id, name, price} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceReview= (event) =>{
        event.preventDefault();
        const form = event.target;
        const Name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review ={
            service: _id,
            serviceName: name,
            price,
            Patient: Name,
            email,
            phone,
            message
        }

        fetch('https://b6a11-service-review-server-side-mirazulislam1.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                alert('service added is successfully')
                form.reset();

            }
        })
        .catch(error => console.error(error))

    }
    return (
        <div className='mt-10'>
        <form onSubmit={handlePlaceReview}>
        <h2 className='text-4xl'>you are about to service: {name}</h2>
        <h4 className='text-3xl'>Price : ${price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-20'>
            <input Name='firstName' type="text" placeholder="First Name" className="input input-bordered input-ghost w-full " />
            <input Name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-ghost w-full " />
            <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered input-ghost w-full " required />
            <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-ghost w-full " />
            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your message" required></textarea>
            <button className="btn btn-success">confirm</button>
        </form>
        </div>
    );
};

export default CheckOut;