import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Canteencard from './assets/components/Canteen-card/Canteencard';
import Showcard from './assets/components/Canteen-card/Showcard';
import Fail from './assets/components/Checkout/Fail';
import Success from './assets/components/Checkout/Success';
import Dashboard from './assets/components/Dashboard/Dashboard';
import Foodorder from './assets/components/Food order/Foodorder';
import SelectedFood from './assets/components/Food order/SelectedFood';
import Guestpermission from './assets/components/Guest/Guestpermission';
import Permission_Granted from './assets/components/Guest/Permission_Granted';
import Librarybook from './assets/components/Library/Librarybook';
import Books from './assets/components/Library_Book_Rent/Books';
import Books_admin from './assets/components/Library_Book_Rent/Books_admin';
import RequestBooks from './assets/components/Library_Book_Rent/RequestBooks';
import Login from './assets/components/Login/Login';
import LostCards from './assets/components/Lost & Found/LostCards';
import Permission from './assets/components/permission/Permission';
import Registration from './assets/components/Registration/Registration';
import Root from './assets/components/Root/Root';
import Tid from './assets/components/Temporaryid/Tid';
import './index.css';
import AuthProvider from './Providers/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
        
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>,
    
  },
  {
    path:'/temporayid',
    element:<ProtectedRoute><Tid></Tid></ProtectedRoute>
  },
  {
    path:'/permission',
    element:<ProtectedRoute><Permission></Permission></ProtectedRoute>,
    loader :()=>fetch('http://localhost:5000/usecase')
    
  },
  {
    path:'/guest_permission',
    element:<ProtectedRoute><Guestpermission></Guestpermission></ProtectedRoute>

  },
  {
    path:'/permission_grand',
    element:<ProtectedRoute><Permission_Granted></Permission_Granted></ProtectedRoute>,
    loader :()=>fetch('http://localhost:5000/guest')
  },{
    path:'/library-book',
    element:<ProtectedRoute><Librarybook></Librarybook></ProtectedRoute>,
    loader: () => fetch('categories.json').then(response => response.json())
  },
  {
    path:'/order-food',
    element:<ProtectedRoute><Foodorder></Foodorder></ProtectedRoute>,
    loader:()=>fetch('http://localhost:5000/food-admin')
  },
  {
    path:'/food-admin',
    element:<Adminpro><Food_admininstration></Food_admininstration></Adminpro>
  },
  {
    path:'/selected-foods',
    element:<ProtectedRoute><SelectedFood></SelectedFood></ProtectedRoute>,
    loader:()=>fetch('http://localhost:5000/canteen-card')
  },
  {
    path:'/success',
    element:<Success></Success>
  },
  {
    path:'/cancel',
    element:<Fail></Fail>
  },
  {
    path:'/lost-found',
    element:<ProtectedRoute><LostCards></LostCards></ProtectedRoute>,
    loader:()=>fetch('http://localhost:5000/lost-admin')
  },
  {
    path:'/lost-admin',
    element:<Adminpro><Lost$found_admin></Lost$found_admin></Adminpro>
  },
  {
    path:'/Lib-Books-Rent',
    element:<ProtectedRoute><Books></Books></ProtectedRoute>,
    loader:()=>fetch('http://localhost:5000/book-admin')
  },
  {
    path:'/payment-gateway',
    element:<PaymentGateway></PaymentGateway>
  },
  {
    path:'/Books-admin',
    element:<Adminpro><Books_admin></Books_admin></Adminpro>
  },
  {
    path:'/req-books',
    element:<RequestBooks></RequestBooks>
  },
  {
    path:'/canteen-card',
    element:<ProtectedRoute><Canteencard></Canteencard></ProtectedRoute>
  },
  {
    path:'/show-cards',
    element:<ProtectedRoute><Showcard></Showcard></ProtectedRoute>,
    loader:()=>fetch('http://localhost:5000/canteen-card')
  },
  {
    path:'/admin-login',
    element:<Adminpro><Showcard></Showcard></Adminpro>

  },
  {
    path:'/administration',
    element:<Administration></Administration>
  },
 
  {
    path:'/admin-panel',
    element:<Adminpro><ControlDigitalCanteenCard></ControlDigitalCanteenCard></Adminpro>,
    loader:()=>fetch('http://localhost:5000/centeen-card')
  },
  {
      path:'/admin-dashboard',
      element:<Adminpro><Admin_Dash></Admin_Dash></Adminpro>
  },
  {
    path: '/update-card/:id',
    element: <Admin_Dash></Admin_Dash>,
    loader: async ({ params }) => {
        const response = await fetch(`http://localhost:5000/centeen-card/${params.id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch card data');
        }
        return response.json();
    }
},



  
]);

import ControlDigitalCanteenCard from './assets/components/Administration/ControlDigitalCanteenCard';
import Food_admininstration from './assets/components/Administration/Food_admininstration';
import Lost$found_admin from './assets/components/Administration/Lost$found_admin';
import PaymentGateway from './assets/components/Canteen-card/PaymentGateway';
import Admin_Dash from './assets/components/Dashboard/Admin_Dash';
import { BookProvider } from './assets/components/Library_Book_Rent/BookContext';
import Administration from './assets/components/Login/Administration';
import Adminpro from './assets/components/protectedRoute/Adminpro';
import ProtectedRoute from './assets/components/protectedRoute/ProtectedRoute';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl bg-white mx-auto'>
      <AuthProvider>
        <BookProvider>
          <RouterProvider router={router} />
        </BookProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
