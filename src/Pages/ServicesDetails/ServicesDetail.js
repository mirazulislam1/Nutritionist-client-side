import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ServicesDetail = ({ service }) => {
    const {_id,image, name,Description, price, rating} = service;
    useTitle('AllServices')
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                {
                    Description.length > 100 ?
                        <>{Description.slice(0, 100) + '...'} <Link to={`/service/${_id}`}><button className="btn btn-outline btn-success">view details...</button></Link></>
                        :
                        Description
                }

                <p className='text-2xl text-orange-600 font-semibold'>Price : ${price}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Ratings : {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkOut/${_id}`}><button className="btn btn-primary">Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetail;