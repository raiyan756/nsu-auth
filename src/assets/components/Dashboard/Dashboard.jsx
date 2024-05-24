import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut()
            .then(() => navigate("/"))
            .catch(error => console.error(error));
    }

    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="hidden lg:block w-72 bg-blue-500 text-white">
                <div className="flex flex-col h-full py-96">
                    <div className="p-6">
                        { (
                            <button onClick={handleSignOut} className="flex items-center space-x-2 px-24 py-2 bg-white text-blue-500 rounded-md">
                                Log Out <FiLogOut />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="lg:hidden">
                    <div className="flex justify-end p-5">
                        <button onClick={() => setOpen(!open)}><GiHamburgerMenu className="w-8 h-8 text-blue-500" /></button>
                    </div>
                    {open && (
                        <div className="flex flex-col items-end p-5">
                            <button onClick={() => setOpen(false)}><IoCloseSharp className="w-6 h-6 text-blue-500" /></button>
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-center justify-center flex-grow p-10">
                    <h1 className="text-4xl font-bold mb-8 text-blue-500">NSU Automation System</h1>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Services</h2>
                    <div className="flex flex-col gap-4">
                        <NavLink to="/temporayid" className="btn btn-primary">Temporary ID</NavLink>
                        <NavLink to="/guest_permission" className="btn btn-primary">Guest Permission</NavLink>
                        <NavLink to="/library-book" className="btn btn-primary">Library Book Location</NavLink>
                         <NavLink to="/order-food"> <button className="btn btn-primary">Food Order Online</button></NavLink>
                         <NavLink to="/lost-found"><button className="btn btn-primary">Lost & Found</button></NavLink>
                        <NavLink to="/Lib-Books-Rent"><button className="btn btn-primary">Library Book Rent</button></NavLink>
                        <NavLink to="/canteen-card"><button className="btn btn-primary">Smart Canteen Card</button></NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
