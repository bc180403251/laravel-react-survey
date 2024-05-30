
import {  Navigate, createBrowserRouter } from "react-router-dom";


import Dashboard from './views/Dashboard'
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import DefaultLayout from './Components/DefaultLayout'
import GuestsLayout from "./Components/GuestsLayout";


const router=createBrowserRouter([

    {
        path:'/',
        element: <DefaultLayout />,
        children:[
            {
                path:'/dashboard',
                element:<Navigate to='/'/>
            },  {
        path:'/',
        element: <Dashboard />
    },
    
    {
        path: '/surveys',
        element: <Surveys />
    }]
    },

  
    ,
    {
        path: '/',
        element: < GuestsLayout />,
        children:[
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },

        ]
    }


])

export default router;