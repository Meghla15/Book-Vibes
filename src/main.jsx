import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
   RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </React.StrictMode>,
)
