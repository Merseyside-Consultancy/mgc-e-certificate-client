import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Ecertificate from './components/Ecertificate/Ecertificate';
import Admin from './components/Admin/Admin';
import SingleCertificate from './components/SingleCertificate/SingleCertificate';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: 'e-certificate',
        element:<Ecertificate></Ecertificate>
      },
      {
        path:'admin',
        element:<PrivateRoute><Admin></Admin></PrivateRoute>
      },
      {
        path: 'singleCertificate/:nameText',
        element: <SingleCertificate></SingleCertificate>,
        loader: ({params})=>fetch(`https://mgc-e-certificate-server.vercel.app/singleCertificate/${params.nameText}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
