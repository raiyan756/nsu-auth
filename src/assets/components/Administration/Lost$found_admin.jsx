import React from 'react';

const Lost$found_admin = () => {
    const handleadmin=e=>{
      
        e.preventDefault();
        const form=e.target;
        const lostphotourl=form.photourl.value; // Update to match the name attribute
        const lostname=form.relation.value; // Update to match the name attribute
        const lostlocation=form.code.value;// Update to match the name attribute
        const findingdate=form.prize.value;
        const admin={lostphotourl,lostname,lostlocation,findingdate};

        console.log(admin);
        fetch('http://localhost:5000/lost-admin',{
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
            <label htmlFor="photourl" className="block text-sm font-medium text-gray-700">Lost Photo URL:</label>
            <input type="url" name="photourl" id="photourl" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="relation" className="block text-sm font-medium text-gray-700">Lost Thing Name:</label>
            <input type="text" name="relation" id="relation" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Fining Location:</label>
            <input type="text" name="code" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Finding Date</label>
            <input type="datetime" name="prize" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
           
          </div>
          
          
          
           <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">ADD</button>
          
          
          <br /><br />
        
          
        </form>
      </div>
    );
};

export default Lost$found_admin;