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
        element:<Admin></Admin>
      },
      {
        path: 'singleCertificate/:nameText',
        element: <SingleCertificate></SingleCertificate>,
        loader: ({params})=>fetch(`http://localhost:5000/singleCertificate/${params.nameText}`)
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
