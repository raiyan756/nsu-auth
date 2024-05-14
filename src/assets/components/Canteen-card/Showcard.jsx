// Showcard.jsx
import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import './Showcard.css'; // Import CSS file for card styling

const Showcard = () => {
    const cards = useLoaderData();

    // Check if cards is undefined or null
    if (!cards || cards.length === 0) {
        return <div>No cards available</div>; // Return message if no cards
    }

    // Display only the latest card
    const latestCard = cards[cards.length - 1];

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    <img src={latestCard.cardphoto} alt="Card" className="card-photo" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Card Holder: {latestCard.cardholdername}</h2>
                    <p className="card-info">ID No: {latestCard.code}</p>
                    <p className="card-info">Amount: ${latestCard.amount}</p>
                    
                    <NavLink to='/order-food'><button className="btn btn-error">Make Purchase</button></NavLink>
                </div>
            </div>
            
        </div>
    );
};

export default Showcard;
