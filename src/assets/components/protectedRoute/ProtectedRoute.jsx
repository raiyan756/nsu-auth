import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const{user}=useContext(AuthContext);
    if(user){
        return children
    }
    return <Navigate to='/'></Navigate>
};

export default ProtectedRoute;