import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

import "./Registration.css";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, verifyEmail, user } = useContext(AuthContext);
    const [emailError, setEmailError] = useState('');
    
    const onSubmit = data => {
        // Reset the email error
        setEmailError('');

        // Validate email domain
        if (!data.email.endsWith('@northsouth.edu')) {
            setEmailError('Only @northsouth.edu email addresses are allowed.');
            return;
        }

        createUser(data.email, data.password, data.name)
            .then(result => {
                const userInfo = {
                    name: data?.name,
                    email: data?.email,
                };

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast('User added successfully');
                    }
                });

                reset();
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photoURL,
                });

                // Verify email and then navigate to the dashboard
                verifyEmail(data.email)
                    .then(() => {
                        toast.success('Please verify your email address', {
                            position: 'top-center',
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        // navigate(location?.state ? location.state : "/dashboard"); // Navigating to /dashboard
                    })
                    .catch(error => {
                        console.error("Error sending verification email:", error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="hero min-h-screen">
            <ToastContainer />
            <div className="hero-content flex-col lg:flex-row lg:space-x-60">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-3 bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" {...register("phoneNumber")} name="number" placeholder="Phone Number" className="input input-bordered" />
                            {errors.phoneNumber && <span className="text-red-600">Phone Number is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User-ID</span>
                            </label>
                            <input type="number" name="" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                            {emailError && <span className="text-red-600">{emailError}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be at least 6 characters</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="unique-button bg-red-600" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="ml-2 text-center">Already have an account? <Link to="/"><span className="text-indigo-700">Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
