import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { sendEmailVerification, updateProfile } from "firebase/auth";

import "./Registration.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        createUser(data.email, data.password, data.name )
            .then(result => {
                sendEmailVerification(result.user);
                
                const userInfo = {
                    name: data?.name,
                    email: data?.email,
                    
                }
                
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
                            toast('user added successfully')
                        }
                    })
                reset();
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photoURL,
                    
                })
                navigate(location?.state ? location.state : "/dashboard")

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen  ">
            <div className="hero-content flex-col lg:flex-row lg:space-x-60">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-3 bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number"  {...register("phoneNumber")} name="number" placeholder="Phone Number" className="input input-bordered" />
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
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                               
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            

                        </div>
                        <div className="form-control mt-6">
                            <input className="unique-button" type="submit" value="Sign Up" />
                            
                        </div>
                    </form>
                    <p className="ml-2 text-center">Already have an account <Link to="/"><span className="text-indigo-700">Login</span></Link></p>
                </div>
            </div>

        </div>
    );
};

export default Registration;