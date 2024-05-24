// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import './Adminpanel.css'; // Import CSS file for card styling
// import Swal from 'sweetalert2';

// const Adminpanel = () => {
//     const admin = useLoaderData();
//     const handleDelete=_id=>{
//         console.log(_id);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//           }).then((result) => {
//             if (result.isConfirmed) {

//                 fetch(`http://localhost:5000/centeen-card/${_id}`,{
//                     method:'DELETE'
//                 })
//                 .then(res=>res.json())
//                 .then(data=>{
//                     console.log(data);
//                     if(data.deletedCount>0){
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your file has been deleted.",
//                             icon: "success"
//                           });
//                     }
//                 })


              
//             }
//           });
//     }

//     return (
//         <div className="admin-container flex-auto">
//             {admin.map((card, index) => (
//                 <div key={index} className="card">
//                     <div className="card-header">
//                         <img src={card.cardphoto} alt="Card" className="card-photo" />
//                     </div>
//                     <div className="card-body">
//                         <h2 className="card-title">Card Holder: {card.cardholdername}</h2>
//                         <p className="card-info">ID No: {card.code}</p>
//                         <p className="card-info">Amount: ${card.amount}</p>
//                         <div className="card-buttons">
//                             <button onClick={()=>handleDelete(card._id)} className="btn btn-outline btn-error">Delete Card</button>
                            
//                             <Link to={`/update-card/${card._id}`}>
//                                 <button className="btn btn-outline btn-accent">Update Card</button>
//                             </Link>
//                         </div>
                       
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Adminpanel;
