import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useTitle('My Review')
    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-mirazulislam1.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this service');
        if(proceed){
            fetch(`https://b6a11-service-review-server-side-mirazulislam1.vercel.app/review/${id}`,{
                method: 'DELETE', 
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h1 className='text-3xl'>You have {reviews.length} services</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        reviews?.map(review => <ReviewRow key={review._id} 
                            review={review}
                            handleDelete={handleDelete}
                            ></ReviewRow>)
                       }                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;