import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Adminpro = ({children}) => {
    const{user}=useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate to='/administration'></Navigate>
};

export default Adminpro;