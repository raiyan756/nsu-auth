import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
    element: <Dashboard></Dashboard>,
    
  },
  {
    path:'/temporayid',
    element:<Tid></Tid>
  },
  {
    path:'/permission',
    element:<Permission></Permission>,
    loader :()=>fetch('http://localhost:5000/usecase')
    
  },
  {
    path:'/guest_permission',
    element:<Guestpermission></Guestpermission>

  },
  {
    path:'/permission_grand',
    element:<Permission_Granted></Permission_Granted>,
    loader :()=>fetch('http://localhost:5000/guest')
  },{
    path:'/library-book',
    element:<Librarybook></Librarybook>,
    loader: () => fetch('categories.json').then(response => response.json())
  },
  {
    path:'/order-food',
    element:<Foodorder></Foodorder>,
    loader:()=>fetch('http://localhost:5000/food-admin')
  },
  {
    path:'/food-admin',
    element:<FoodAdmin></FoodAdmin>
  },
  {
    path:'/selected-foods',
    element:<SelectedFood></SelectedFood>
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
    element:<LostCards></LostCards>,
    loader:()=>fetch('http://localhost:5000/lost-admin')
  },
  {
    path:'/lost-admin',
    element:<Lost_Admin></Lost_Admin>
  },
  {
    path:'/Lib-Books-Rent',
    element:<Books></Books>,
    loader:()=>fetch('http://localhost:5000/book-admin')
  },
  {
    path:'/Books-admin',
    element:<Books_admin></Books_admin>
  },
  {
    path:'/req-books',
    element:<RequestBooks></RequestBooks>
  },
  {
    path:'/canteen-card',
    element:<Canteencard></Canteencard>
  },
  {
    path:'/show-cards',
    element:<Showcard></Showcard>,
    loader:()=>fetch('http://localhost:5000/centeen-card')
  },
  {
    path:'/admin-login',
    element:<CanteenAdmin></CanteenAdmin>

  },
  {
    path:'/admin-panel',
    element:<Adminpanel></Adminpanel>,
    loader:()=>fetch('http://localhost:5000/centeen-card')
  },
  {
    path: '/update-card/:id',
    element: <Updatepanel />,
    loader: async ({ params }) => {
        const response = await fetch(`http://localhost:5000/centeen-card/${params.id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch card data');
        }
        return response.json();
    }
}


  
]);
import './index.css'
import Root from './assets/components/Root/Root';
import Login from './assets/components/Login/Login';
import Registration from './assets/components/Registration/Registration';
import AuthProvider from './Providers/AuthProvider';
import Dashboard from './assets/components/Dashboard/Dashboard';
import Tid from './assets/components/Temporaryid/Tid';
import Permission from './assets/components/permission/Permission';
import Guestpermission from './assets/components/Guest/Guestpermission';
import Permission_Granted from './assets/components/Guest/Permission_Granted';
import Librarybook from './assets/components/Library/Librarybook';
import Foodorder from './assets/components/Food order/Foodorder';
import FoodAdmin from './assets/components/Food order/FoodAdmin';
import SelectedFood from './assets/components/Food order/SelectedFood';
import Success from './assets/components/Checkout/Success';
import Fail from './assets/components/Checkout/Fail';
import LostCards from './assets/components/Lost & Found/LostCards';
import Lost_Admin from './assets/components/Lost & Found/Lost_Admin';
import Books from './assets/components/Library_Book_Rent/Books';
import Books_admin from './assets/components/Library_Book_Rent/Books_admin';
import RequestBooks from './assets/components/Library_Book_Rent/RequestBooks';
import Canteencard from './assets/components/Canteen-card/Canteencard';
import Showcard from './assets/components/Canteen-card/Showcard';
import CanteenAdmin from './assets/components/Canteen-card/CanteenAdmin';
import Adminpanel from './assets/components/Canteen-card/Adminpanel';
import Updatepanel from './assets/components/Canteen-card/Updatepanel';
import { BookProvider } from './assets/components/Library_Book_Rent/BookContext';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl bg-white mx-auto'>
      <AuthProvider>
        <BookProvider> {/* Wrap your application with BookProvider */}
          <RouterProvider router={router} />
        </BookProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);