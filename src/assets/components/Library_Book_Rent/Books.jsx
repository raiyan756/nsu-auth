import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useBook } from './BookContext';
import "./Books.css";

const Books = () => {
    const { setRequests, requests } = useBook();
    const books = useLoaderData();

    const handleRequestRent = (book) => {
        setRequests([...requests, { ...book, status: 'processing' }]);
        //data fetching
        //string declare=const status process
        //asynic function
        
    };

    return (
        <div className="container">
            <div className="cards-section">
                {books.map((book, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl flex m-4">
                        <figure className="px-10 pt-10">
                            <img src={book.bookphotourl} alt="Book" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Book Name: {book.bookname}</h2>
                            <h2 className="card-title">Book Location: {book.bookcode}</h2>
                            <h2 className="card-title">Availability: {book.availability}</h2>
                            <button className="btn btn-success" onClick={() => handleRequestRent(book)}>
                                <h2 className="card-title">Request For Rent</h2>
                            </button>
                            {requests.some(request => request.bookname === book.bookname && request.status === 'processing') && (
                                <div className="processing">
                                    <p>Processing...</p>
                                </div>
                            )}
                            {requests.some(request => request.bookname === book.bookname && request.status === 'approved') && (
                                <div className="approved">
                                    <p>Approved</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                 {/* <NavLink to='/administration'><button className="btn btn-primary">Admin</button></NavLink>  */}
            </div>
        </div>
    );
};

export default Books;
