import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Permission_Granted = () => {
    const guests = useLoaderData();

    return (
        <div className="flex flex-wrap justify-center">
            <h1 className='text-center bold' >Permission Granded for :</h1>
            {guests.map((guest, index) => (
                <div key={index} className="card w-96 bg-base-100 shadow-xl flex m-4">
                    <figure className="px-10 pt-10">
                        <img src={guest.photourl} alt="Guest" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> Relationship : {guest.rela}</h2>
                        <h2 className="card-title">Student Userid :{guest.number}</h2>
                        <h2 className="card-title">Guest Mobile-Number : {guest.tele}</h2>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Permission_Granted;
