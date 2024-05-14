import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updatepanel = () => {
    const update=useLoaderData();
    const{_id,cardphoto,cardholdername,code,amount}=update;
    const handleCard = async (e) => {
        e.preventDefault();
        const form = e.target;
        const cardphoto = form.photourl.value;
        const cardholdername = form.holdername.value;
        const code = form.code.value;
        const amount = form.amount.value;
        const info = { cardphoto, cardholdername, code, amount };
        console.log(info);
        
        try {
            const response = await fetch(`http://localhost:5000/canteen-card/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                Swal.fire({
                    title: "Updated!",
                    text: "Your card has been updated.",
                    icon: "success"
                });
            } else {
                // Handle error response
                const errorData = await response.json();
                console.error('Error updating card:', errorData);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update card. Please try again.",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Error updating card:', error);
            Swal.fire({
                title: "Updated!",
                text: "Your card has been updated.",
                icon: "success"
            });
        }
    };
    return (
        <div>
            <div>
            
            <div className=" mx-auto container mt-8">
           
                <h2 className="text-2xl font-bold mb-4 text-center">Canteen Card Form</h2>
                
               
                <br />
                <br />
                <form onSubmit={handleCard} className="max-w-sm mx-auto">
                    <div className="mb-4">
                        <label htmlFor="photourl" className="block text-sm font-medium text-gray-700">Card Photo</label>
                        <input type="url" name="photourl" defaultValue={cardphoto} id="photourl" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="relation" className="block text-sm font-medium text-gray-700">Card Holder Name</label>
                        <input type="text" defaultValue={cardholdername} name="holdername" id="relation" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">NSU ID No:</label>
                        <input type="number" defaultValuw={code} name="code" id="phone" defaultValue={code} className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
                    </div>
                    <div className="mb-4 flex">
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Amount to be Added</label>
                        <input type="number" defaultValue={amount} name="amount" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
                        <button type="submit">Pay</button>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Update Card</button>
                    <br />
                    <br />
                    <br />

                    
                    <br /><br />
                </form>
            </div>
        </div>
        </div>
    );
};

export default Updatepanel;