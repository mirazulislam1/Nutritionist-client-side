import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {_id,image, name,Description, price, rating} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{Description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price : ${price}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Ratings : {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;