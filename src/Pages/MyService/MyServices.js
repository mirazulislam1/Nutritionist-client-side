import React from 'react';
import img1 from '../../Images/services/e.jpg'
import img2 from '../../Images/services/nutrition.jpg'
import img3 from '../../Images/services/motivation.jpg'
import './MyService.css'

const MyServices = () => {
    return (
        <div className='mt-20'>
            <h3 className='text-center text-2xl text-accent'>My Services</h3>
            <h1 className='text-center font-bold text-4xl text-accent-focus'>Let's change your life</h1>
            <div className='grid lg:grid-cols-3 mt-10'>
                <div>
                    <img className='service-image ml-20' src={img1} alt="Avatar" />
                    <h3 className='text-info mt-5 font-bold text-3xl text-center'>Fitness Trainings</h3>
                    <p className='text-center mt-2 p-4'>Whether you're a doctor or a patient, this exercise will make communication easier by teaching you the right medical/health-related vocabulary.</p>
                    
                </div>

                <div>
                    <img className='service-image ml-20' src={img2} alt="Avatar" />
                    <h3 className='text-info mt-5 font-bold text-3xl text-center'>Nutrition Programs</h3>
                    <p className='text-center mt-2 p-4'>Clinically driven nutrition insights you can trust to be balanced, credible, and reliable. Dedicated to advancing the latest insights and info available in nutrition education.</p>
                </div>

                <div>
                    <img className='service-image ml-20' src={img3} alt="Avatar" />
                    <h3 className='text-info mt-5 font-bold text-3xl text-center'>Life Motivation</h3>
                    <p className='text-center mt-2 p-4'>Read a true story about human inventiveness and its power to overcome crippling adversity. Read the story of a boy who builds a wind turbine to save his Malawian village from famine.</p>
                </div>

            </div>

        </div>
    );
};

export default MyServices;