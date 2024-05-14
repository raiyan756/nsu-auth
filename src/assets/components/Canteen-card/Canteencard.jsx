import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Canteencard = () => {
    //const [selectedcards, setSelectedcards] = useState([]);
    const handleCard = async e => {
        e.preventDefault();
        const form = e.target;
        const cardphoto = form.photourl.value;
        const cardholdername = form.holdername.value;
        const code = form.code.value;
        const amount = form.amount.value;
        const info = { cardphoto, cardholdername, code, amount };
        console.log(info);

        try {
            const response = await fetch('http://localhost:5000/canteen-card', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });
            const data = await response.json();
            console.log(data);
            toast.success(`${info.cardholdername} User Added Successfully`, {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.error('Error adding canteen card:', error);
            toast.error('Failed to add canteen card. Please try again.', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className=" mx-auto container mt-8">
           
                <h2 className="text-2xl font-bold mb-4 text-center">Canteen Card Form</h2>
                
               <NavLink to='/admin-login'><button type="submit" className="w-28 left-16 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Admin Login</button></NavLink>
                <br />
                <br />
                <form onSubmit={handleCard} className="max-w-sm mx-auto">
                    <div className="mb-4">
                        <label htmlFor="photourl" className="block text-sm font-medium text-gray-700">Card Photo</label>
                        <input type="url" name="photourl" id="photourl" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="relation" className="block text-sm font-medium text-gray-700">Card Holder Name</label>
                        <input type="text" name="holdername" id="relation" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">NSU ID No:</label>
                        <input type="number" name="code" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
                    </div>
                    <div className="mb-4 flex">
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Amount to be Added</label>
                        <input type="number" name="amount" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
                        <button type="submit">Pay</button>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">ADD</button>
                    <br />
                    <br />
                    <br />

                    <NavLink to='/show-cards'><button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">View Canteen Card</button></NavLink>
                    <br /><br />
                </form>
            </div>
        </div>
    );
};

export default Canteencard;
