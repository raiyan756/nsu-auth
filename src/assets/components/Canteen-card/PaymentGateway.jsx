// PaymentGateway.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentGateway = () => {
  const location = useLocation();
  
  const { selectedFoods, totalPrice, cardAmount,emailone,cardHolder} = location.state;

  console.log(cardAmount);

  const confirmPayment = async () => {
    if (cardAmount >= totalPrice) {
      try {
        const response = await fetch('http://localhost:5000/pay-by-student-card', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ cardHolder, amount: totalPrice })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to process payment');
        }

        const data = await response.json();

        if (data.message === 'Successful') {
          alert('Your Payment Is Successfull');
          //navigate('/payment-success'); // Redirect to success page or show success message
        } else {
          console.error('Payment failed:', data.message);
        }
      } catch (error) {
        console.error('Error processing payment:', error.message);
      }
    } else {
      console.error('Insufficient balance on student card');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Payment Gateway</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Selected Foods</h2>
        {selectedFoods.map((food, index) => (
          <div key={index} className="mb-4">
            <p className="text-lg font-medium">{food.foodname}</p>
            <p className="text-gray-700">Price: {food.prize}</p>
          </div>
        ))}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Total Price: ${totalPrice?.toFixed(2)}</h2>
          <h2 className="text-xl font-bold">Card Amount: ${cardAmount}</h2>
        </div>
        <button onClick={confirmPayment} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-6">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentGateway;

