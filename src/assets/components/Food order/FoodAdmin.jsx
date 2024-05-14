import React, { useState } from 'react';

const FoodAdmin = () => {
    
    const handleadmin=e=>{
      
        e.preventDefault();
        const form=e.target;
        const foodphotourl=form.photourl.value; // Update to match the name attribute
        const foodname=form.relation.value; // Update to match the name attribute
        const foodcode=form.code.value;// Update to match the name attribute
        const prize=form.prize.value;
        const admin={foodphotourl,foodname,foodcode,prize};

        console.log({admin});
        fetch('http://localhost:5000/food-admin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
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
        <form onSubmit={handleadmin} className="max-w-sm mx-auto">
          
          
          <div className="mb-4">
            <label htmlFor="photourl" className="block text-sm font-medium text-gray-700">Food Photo URL:</label>
            <input type="url" name="photourl" id="photourl" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="relation" className="block text-sm font-medium text-gray-700">Food Name:</label>
            <input type="text" name="relation" id="relation" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Food Code:</label>
            <input type="text" name="code" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Prize:</label>
            <input type="number" name="prize" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          
          
          
           <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Register</button>
          
          
          <br /><br />
        
          
        </form>
      </div>
    );
};

export default FoodAdmin;