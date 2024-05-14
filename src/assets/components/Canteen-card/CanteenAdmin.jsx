import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const CanteenAdmin = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                navigate("/admin-panel");
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <div>
            <div className="login-section">
                <h1 className="text-center mb-8">User Admin Login</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <input className="input-field" type="email" name="email" placeholder="Enter Email" required />
                    <input className="input-field" type="password" name="password" placeholder="Enter Password" required />
                    <button className="btn-primary" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default CanteenAdmin;