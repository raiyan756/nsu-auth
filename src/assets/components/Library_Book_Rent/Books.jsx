import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import "./Books.css";
import RequestBooks from './RequestBooks'; // Import RequestBooks component
import { useBook } from './BookContext';

const Books = () => {
    const { setSelectedBook } = useBook();
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
   
    const books = useLoaderData();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                navigate("/Books-admin");
            })
            .catch(error => {
                console.log(error);
            });
    };
    const handleRequestRent = (book) => {
        setSelectedBook(book);
      };

   
    

    return (
        <div className="container">
            <div className="login-section">
                <h1 className="text-center mb-8">User Admin Login</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <input className="input-field" type="email" name="email" placeholder="Enter Email" required />
                    <input className="input-field" type="password" name="password" placeholder="Enter Password" required />
                    <button className="btn-primary" type="submit">Login</button>
                </form>
            </div>
         
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
                            {/* Pass book data to handleRequestRent */}
                            <button className="btn btn-success" onClick={() => handleRequestRent(book)}>
                <h2 className="card-title">Request For Rent</h2>
              </button>
                            {/* Render the pending button conditionally */}
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default Books;
