import React from 'react';
import img from '../../Images/Slider/slider3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPhone } from '@fortawesome/free-solid-svg-icons'

const Himself = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-1/2'><img className='rounded-xl drop-shadow-2xl' src={img}alt="Album" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-4xl font-bold text-success">Hello, I'm Dt.Farzana Ahmed  your personal nutritionist</h2>
                <p>Online Diet counselling and Diet Chart with free follow up by Dietitian Farzana Ahmed. Diet chart with affordable and available food items.</p>
                <h3 className='text-3xl'><FontAwesomeIcon className='text-accent-focus' icon={faClock} /> Every day from 10:00 to 2:00</h3>
                <h3 className='text-3xl'> <FontAwesomeIcon className='text-accent-focus' icon={faPhone}/> +0854-6140-23</h3>
                <div className="card-actions justify-end">
                    <button className="btn btn-success">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Himself;