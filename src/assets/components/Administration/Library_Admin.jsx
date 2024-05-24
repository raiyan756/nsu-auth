import React from 'react';
import { ToastContainer } from 'react-toastify';

const Library_Admin = () => {
    const handleadmin=e=>{
      
        e.preventDefault();
        const form=e.target;
        const bookphotourl=form.bookphotourl.value; // Update to match the name attribute
        const bookname=form.name.value; // Update to match the name attribute
        const bookcode=form.code1.value;// Update to match the name attribute
        const Availability=form.availability.value;
        const admin={bookphotourl,bookname,bookcode,Availability};

        console.log({admin});
        fetch('http://localhost:5000/book-admin',{
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
        .then(() => {
          toast.success('Please Verify E-mail Address', {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
          //navigate(location?.state ? location.state : "/dashboard"); // Navigating to /dashboard
      })


    }
    return (
        
             <div>
              <ToastContainer/>
            <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">User Information Form</h2>
        <br />
        <br />
        <form onSubmit={handleadmin} className="max-w-sm mx-auto">
          
          
          <div className="mb-4">
            <label htmlFor="photourl" className="block text-sm font-medium text-gray-700">Book Photo URL:</label>
            <input type="url" name="bookphotourl" id="photourl" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="relation" className="block text-sm font-medium text-gray-700">Book Name:</label>
            <input type="text" name="name" id="name" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Book Code:</label>
            <input type="text" name="code1" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Availability:</label>
            <input type="text" name="availability" id="phone" className="mt-1 p-2 w-full rounded border border-blue-500 focus:border-blue-700 focus:ring focus:ring-blue-200" />
          </div>
          
          
          
           <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Add Books</button>
          
          
          <br /><br />
        
          
        </form>
      </div>

      
        </div>
       
    );
};

export default Library_Admin;