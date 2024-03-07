import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from './Components/LoginPage.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import SignUpPage from './Components/SignUpPage.jsx'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [{path: "", element: <Home/>},
    {path: "LoginPage", element: <LoginPage/>},
    {path: "SignUpPage", element: <SignUpPage/>}]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
