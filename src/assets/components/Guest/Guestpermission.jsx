import React from 'react';
import { NavLink } from 'react-router-dom';

const Guestpermission = () => {
    const handleguest=event=>{
        event.preventDefault();
        const form = event.target;
        const number=form.userid.value; // Update to match the name attribute
        const photourl=form.photourl.value; // Update to match the name attribute
        const rela=form.relation.value; // Update to match the name attribute
        const tele=form.phone.value; // Update to match the name attribute
        const guest={number,photourl,rela,tele};
        console.log({guest});

        fetch('http://localhost:5000/guest',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(guest)
        })
        .then(res=>res.json())
        .then(datas=>{
            console.log(datas);
        })
    }
    return (
        <div className="container mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">User Information Form</h2>
          <br />
          <br />
          <form onSubmit={handleguest} className="max-w-sm mx-auto">
            <div className="mb-4">
              <label htmlFor="userid" className="block text-sm font-medium text-gray-700">User ID:</label>
              <input type="number" name="userid" id="userid" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
              <input type="password" name="password" id="password" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="photourl" className="block text-sm font-medium text-gray-700">Photo URL:</label>
              <input type="url" name="photourl" id="photourl" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="relation" className="block text-sm font-medium text-gray-700">Relation:</label>
              <input type="text" name="relation" id="relation" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number:</label>
              <input type="tel" name="phone" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Submit</button>
            <br /><br />
            <NavLink to={'/permission_grand'}><button className="btn btn-error text-center relative left-36">Process</button></NavLink>
            
          </form>
        </div>
      );
    }

export default Guestpermission;
