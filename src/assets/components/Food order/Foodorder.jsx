import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import "./Foodorder.css";
import { FaShoppingBag } from "react-icons/fa";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Foodorder = () => {
    const foods = useLoaderData();
    console.log(foods);
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // State to store selected foods
    const [selectedFoods, setSelectedFoods] = useState([]);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                navigate("/food-admin");
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Function to handle adding a food to the cart
    const handleAddToCart = (food) => {
        setSelectedFoods([...selectedFoods, food]);
        toast.success(`${food.foodname} added to cart!`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    // Function to navigate to the "Selected Foods" route
    const handleViewFoods = () => {
        navigate("/selected-foods", { state: { selectedFoods } });
    };

    return (
        <div className="container">
            <ToastContainer></ToastContainer>
            <div className="login-section">
                <h1 className="text-center mb-8">User Admin Login</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <input className="input-field" type="email" name="email" placeholder="Enter Email" required />
                    <input className="input-field" type="password" name="password" placeholder="Enter Password" required />
                    <button className="btn-primary" type="submit">Login</button>
                </form>
            </div>
            
         <div className="total-price">
                <button className="btn bg-red-400" onClick={handleViewFoods}><FaShoppingBag className='w-14 h-8'>View</FaShoppingBag></button> {/* Button to navigate to "Selected Foods" route */}
            </div>
     
            <div className="cards-section">
                {foods.map((food, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl flex m-4">
                        <figure className="px-10 pt-10">
                            <img src={food.foodphotourl} alt="Food" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Food Name: {food.foodname}</h2>
                            <h2 className="card-title">Code: {food.foodcode}</h2>
                            <h2 className="card-title">Price: {food.prize}</h2>
                            <button className="btn btn-success" onClick={() => handleAddToCart(food)}>
                                <h2 className="card-title">Add To Cart</h2>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Foodorder;