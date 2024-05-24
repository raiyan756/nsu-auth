import React from 'react';
import { useBook } from './BookContext';

const RequestBooks = () => {
    const { requests, setRequests } = useBook();

    const handleApprove = (bookname) => {
        setRequests(requests.map(request =>
            request.bookname === bookname ? { ...request, status: 'approved' } : request
        ));
    };

    return (
        <div className="container">
            <h2>Requested Books</h2>
            <div className="cards-section">
                {requests.length > 0 ? requests.map((request, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl flex m-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Book Name: {request.bookname}</h2>
                            <h2 className="card-title">Book Location: {request.bookcode}</h2>
                            <h2 className="card-title">Availability: {request.availability}</h2>
                            <button className="btn btn-success" onClick={() => handleApprove(request.bookname)}>
                                <h2 className="card-title">Approve</h2>
                            </button>
                        </div>
                    </div>
                )) : (
                    <p>No book requests yet.</p>
                )}
            </div>
        </div>
    );
};

export default RequestBooks;
