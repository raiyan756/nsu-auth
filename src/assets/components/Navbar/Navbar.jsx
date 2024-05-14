import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const {user , logOut} = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="navbar bg-base-100">
            <div>
                
            </div>
           
        </div>
    );
};

export default Navbar;