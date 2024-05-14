import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Permission = () => {
    const datum=useLoaderData();
    
    return (
        <div>
            <p>This is permission section</p>
            {datum.map((item, index) => (
                    <li key={index}>
                        {/* Render data of each item here */}
                        

                        <div className="card w-96 text-primary-content bg-red-100 text-center ">
                         <div className="card-body text-black">
                         <h2 className="card-title">Name: {item.name}</h2>
                         <h2 className="card-title">Email: {item.email}</h2>
                         <h2 className="card-title"> Access User-ID: {item.number}</h2>
                         <h2 className="card-title">Mobile Number: {item.mobnumber}</h2>
                         <h2 className="card-title">Access Time: 8AM - 4 PM</h2>
                        <p className='text-red-600 text-center ' >Please Show This Card to The Sequrity </p>
                       
                          </div>
                         </div>
                       
                    </li>
                ))}
        </div>
    );
};

export default Permission;