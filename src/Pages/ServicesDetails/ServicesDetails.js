import React, { useEffect, useState } from 'react';
import ServicesDetail from './ServicesDetail';

const ServicesDetails = () => {
    const [allServices, setAllServices] = useState([]);
        useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
        }, [])
    return (
        <div>
            <div>
                
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>

                    {
                        allServices.map(allService => <ServicesDetail key={allService._id} service={allService}></ServicesDetail>)
                    }

                </div>
               
            </div>
        </div>
    );
};

export default ServicesDetails;