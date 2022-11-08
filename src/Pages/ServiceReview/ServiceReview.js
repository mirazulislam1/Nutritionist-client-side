import React from 'react';

const ServiceReview = () => {
    return (
        <div className='grid lg:grid-cols-4 bg-accent text-center p-16 mt-20 rounded-xl'>
        <div>
            <h1 className='text-error text-4xl font-bold'>150</h1>
            <h2 className='text-white text-2xl mt-4'>Happy Customers</h2>
        </div>
        <div>
            <h1 className='text-error text-4xl font-bold'>30</h1>
            <h2 className='text-white text-2xl mt-4'>Nutrition Programs</h2>
        </div>
        <div>
            <h1 className='text-error text-4xl font-bold'>200</h1>
            <h2 className='text-white text-2xl mt-4'>Coaching Certificates</h2>
        </div>
        <div>
            <h1 className='text-error text-4xl font-bold'>550+</h1>
            <h2 className='text-white text-2xl mt-4'>WorkOut sessions</h2>
        </div>
            
        </div>
    );
};

export default ServiceReview;