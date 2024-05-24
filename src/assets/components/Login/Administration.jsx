import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const Administration = () => {
    const { logIn } = useContext(AuthContext);
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
                
                navigate(location?.state || "/admin-dashboard");
            })
            .catch(error => {
                console.log(error);
            });
    }
    const imgurl='https://i.ibb.co/y8nTkr1/user-login-7210570-5857593.webp';
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  ">
        
       <div className="">

       </div>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full  bg-gradient-to-r from-sky-500 to-indigo-500 ">
            <h2 className="text-3xl font-bold text-center mb-4 text-pink-600">Admin Log In</h2>
            <form onSubmit={handleLogin} className="">
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
            
        </div>
    </div>
    );
};

export default Administration;