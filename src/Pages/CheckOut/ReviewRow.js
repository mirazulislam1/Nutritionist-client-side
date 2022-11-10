import React, { useEffect, useState } from 'react';

const ReviewRow = ({review, handleDelete}) => {
    const {_id, serviceName, Patient, price, phone, service} = review;
    const [reviewService, setReviewService] = useState({})

    useEffect( ()=>{
        fetch(`https://b6a11-service-review-server-side-mirazulislam1.vercel.app/${service}`)
        .then(res => res.json())
        .then(data => setReviewService(data))
    }, [service])

  

    return (
        <tr>
            <th>
                <label>
                <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>x</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                        {
                            reviewService?.image &&
                            <img src={reviewService.image} alt="Avatar Tailwind CSS Component" />
                        }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{Patient}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button  className="btn btn-ghost btn-xs">pending</button>
            </th>
        </tr>
    );
};

export default ReviewRow;