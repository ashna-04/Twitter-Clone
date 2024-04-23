import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import FrontPage from './FrontPage';
import Home from './Home';
import Login from './Login';
import Posts from './Posts';
import Register from './Register';
import CreatePost from './CreatePost';
import Query from './Query';
import About from './About';

const router = createBrowserRouter([
    {
        path:'/',
        element:<FrontPage></FrontPage>,
    },
    {
      path:'/home',
      element:<Home></Home>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/posts',
      element:<Posts></Posts>
    },
    {
      path:'/post',
      element:<CreatePost></CreatePost>
    },
    {
      path:'/query',
      element:<Query></Query>
    },
    {
      path:'/about',
      element:<About></About>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
