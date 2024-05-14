import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { NavLink } from 'react-router-dom';

const Tid = () => {
    const { user } = useContext(AuthContext);

     const handleuser=event=>{
        event.preventDefault();
        const form=event.target;
        const number=form.number.value;
        const name =form.name.value;
         const email=form.email.value;
        const mobnumber=form.mobnumber.value;
        const values={name,number,email,mobnumber};
        console.log(values);
        fetch('http://localhost:5000/usecase',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(res=>res.json())
        .then(datum=>{
            console.log(datum);
        })
     }

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleuser} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
                        Name
                    </label>
                    <input 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" name="name" id="" />
                    <br />
                    
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
                        Email
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email" name="email" id="" />
                    
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
                       Mobile Number
                    </label>
                   <input
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   type="number" name="mobnumber" id="" />
                    
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="verification">
                        Verification
                    </label>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {user && user.email}
                    </button>
                </div>
                <div className="flex items-center justify-between">
                <button className="btn btn-info"><input type="submit" value="Submit" /></button>
                
                    <NavLink to={'/permission'}> <button className="btn btn-error">Process</button>
</NavLink>
                    
                    
                </div>
            </form>
        </div>
    );
};

export default Tid;
