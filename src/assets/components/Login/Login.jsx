import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(true);
    const [type, setType] = useState("password");

    const handlePasswordToggle = () => {
        setType(prevType => (prevType === "password" ? "text" : "password"));
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        logIn(email, password)
            .then(result => {
                toast.success('Login successful');
                navigate(location?.state || "/dashboard");
            })
            .catch(error => {
                console.log(error);
            });
    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-[url('https://i.ibb.co/jg522Rn/326850.png')] bg-cover bg-center bg-blend-overlay">
            <h2 className="text-3xl font-bold mb-4">NSU Automation System</h2>
            <br />
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-4">Log In</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input type="email" name="email" placeholder="Email" className="input-field" required />
                    </div>
                    <div className="mb-4 relative">
                        <input type={type} placeholder="Password" name="password" className="input-field" required />
                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                            {showPassword ? (
                                <FaRegEye onClick={handlePasswordToggle} />
                            ) : (
                                <FaRegEyeSlash onClick={handlePasswordToggle} />
                            )}
                        </div>
                    </div>
                    <button className="btn-primary w-full mt-4" type="submit">Login</button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-gray-600">New on our platform? <NavLink to="/registration" className="text-blue-500">Create Account</NavLink></p>
                </div>
                <div>
                <p className="text-gray-600 left-32 relative"> <NavLink to='/administration' className="text-blue-500">Or Log in As Admin</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
