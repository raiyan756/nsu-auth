import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 

const Tid = () => {
    const { user, verifyEmail } = useContext(AuthContext);
    const [isEmailVerified, setIsEmailVerified] = useState(false); // State to track email verification status

    const handleVerifyEmail = async () => {
        try {
            await verifyEmail(user.email);
            setIsEmailVerified(true); // Set verification status to true

            toast.success('Please Verify Your Email Address', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.error("Error sending verification email:", error);
            // Handle errors appropriately (e.g., display error message to user)
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Fetch form data
        const form = event.target;
        const userId = form.number.value;
        const name = form.name.value;
       
        const mobnumber = form.mobnumber.value;

        const all={userId,name,mobnumber};
        console.log(all);
        try {
            // Send form data to backend API
            const response = await fetch('http://localhost:5000/usecase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    name,
                   
                    mobnumber,
                }),
            });

            // Check if request was successful
            if (response.ok) {
                // Reset form fields
                form.reset();
                // Display success message
                toast.success('Form submitted successfully!');
            } else {
                // Display error message
                toast.error('Error submitting form. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Display error message
            toast.error('Error submitting form. Please try again later.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <ToastContainer/>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
                        User ID
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="userId"
                        type="number"
                        name='number'
                        placeholder="Enter User ID"
                    />
                    <br />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name='name'
                        placeholder="Enter Name"
                    />
                    <br />
                </div>
                {/* <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name='email'
                        placeholder="Enter Email"
                    />
                    <br />
                </div> */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobnumber">
                        Mobile Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="mobnumber"
                        type="number"
                        name='mobnumber'
                        placeholder="Enter Mobile Number"
                    />
                    <br />
                </div>
                
                <div className="flex items-center justify-between">
                    <button
                        disabled={!isEmailVerified}
                        className={`btn btn-info ${!isEmailVerified && 'cursor-not-allowed'}`}
                    >
                        <input type="submit" value="Submit" />
                    </button>
                    <NavLink to={'/permission'}>
                        <button className="btn btn-error">Process</button>
                    </NavLink>
                </div>
            </form>
            <button
                    onClick={handleVerifyEmail}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Verify Email
                </button>
        </div>
    );
};

export default Tid;
