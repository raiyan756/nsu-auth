import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';

const LostCards = () => {
    const cards=useLoaderData();
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // State to store selected foods
   // const [selectedFoods, setSelectedFoods] = useState([]);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                navigate("/lost-admin");
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <div className='container'>
            <div className="login-section">
                <h1 className="text-center mb-8">User Admin Login</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <input className="input-field" type="email" name="email" placeholder="Enter Email" required />
                    <input className="input-field" type="password" name="password" placeholder="Enter Password" required />
                    <button className="btn-primary" type="submit">Login</button>
                </form>
            </div>
            <div className="cards-section">
                {cards.map((cart, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl flex m-4">
                        <figure className="px-10 pt-10">
                            <img src={cart.lostphotourl} alt="Food" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Lost Thing: {cart.lostname}</h2>
                            <h2 className="card-title">Finding Location: {cart.lostlocation}</h2>
                            <h2 className="card-title">Finding Date: {cart.findingdate}</h2>
                            
                                <h2 className="card-title text-red-500">Collect It From Lost & Found Office</h2>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LostCards;