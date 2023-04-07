import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Phone from './component/Phone';
import Oppo from './component/Oppo';
import Samsang from './component/Samsang';
const router = createBrowserRouter([

  {
    path:'/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/phone',
        element: <Phone></Phone>,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=iphone'),
      },
      {
        path:'/oppo',
        element: <Oppo></Oppo>,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=oppo'),
      },
      {
        path:'/samsang',
        element: <Samsang></Samsang>,
        loader:()=> fetch('https://openapi.programming-hero.com/api/phones?search=samsung'),
      },
      {
        path:'/about',
        element: <About></About>,
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
