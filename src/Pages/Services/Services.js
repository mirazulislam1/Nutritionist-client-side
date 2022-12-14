import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-mirazulislam1.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-20'>
                <h3 className='text-center text-2xl text-accent font-semibold'>My Services</h3>
                <p>My dieticians will provide personalized diet instruction, <br /> menu planning, lifestyle and behavioral changes advice to insure a healthy nutritional plan </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>

            {
                services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }

            </div>
            <div className='text-center mt-10'>
                <button className="btn btn-outline btn-success font-bold text-2xl"><Link to='/serviceDetails'>See All</Link></button>
            </div>
        </div>
    );
};

export default Services;