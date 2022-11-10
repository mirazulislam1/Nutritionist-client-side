import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Service = () => {
    const {image, name,Description, price, rating} = useLoaderData();
    useTitle('Service')
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-20">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{Description}</p>
            <p className='text-2xl text-orange-600 font-semibold'>Price : ${price}</p>
            <p className='text-2xl text-orange-600 font-semibold'>Ratings : {rating}</p>
            
        </div>
    </div>
    );
};

export default Service;