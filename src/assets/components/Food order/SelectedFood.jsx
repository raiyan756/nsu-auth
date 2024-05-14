import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLocation } from 'react-router-dom';

const SelectedFoods = () => {
    const location = useLocation();
    const selectedFoods = location.state.selectedFoods;
    console.log(selectedFoods);
    // Calculate the sum of all food prices
    const totalPrice = selectedFoods.reduce((total, food) => {
        const foodPrice = parseFloat(food.prize); // Convert prize to a number
        return total + foodPrice;
    }, 0);
   
    const makePayment = async () => {
        const foods = []; // Initialize an empty array to store food objects
    
        selectedFoods.forEach(food => {
            const foodname = food.foodname;
            const prize = parseFloat(food.prize);
            const foodObj = { foodname, prize };
            foods.push(foodObj); // Push each food object into the foods array
        });
    
        try {
            const response = await fetch('http://localhost:5000/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(foods)
            });
    
            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }
    
            const data = await response.json();
    
            const stripe = await loadStripe('pk_test_51P8fsnRudPkC5b8dFPtO82kjQSmjnNHyFNX5kdfq9Y5asQBSyq9jLIK5PbPNHeu4HXvltKWxUlQzISDi8WTk2iET003v6e6pGt');
            stripe.redirectToCheckout({
                sessionId: data.id
            }).then(result => {
                // Handle success
                console.log(result);
            }).catch(error => {
                // Handle error
                console.error('Error redirecting to checkout:', error);
            });
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };
    
    
    

    return (
        <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Selected Foods</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedFoods.map((food, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={food.foodphotourl} alt={food.foodname} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{food.foodname}</h2>
                        <p className="text-gray-700">Price: {food.prize}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex justify-between items-center mt-8">
            <h2 className="text-xl font-bold">Total Price: {typeof totalPrice === 'number' ? `$${totalPrice.toFixed(2)}` : 'N/A'}</h2>
            <button onClick={makePayment} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Checkout
            </button>
        </div>
    </div>
    );
};

export default SelectedFoods;