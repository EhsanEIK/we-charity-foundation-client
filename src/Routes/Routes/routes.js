import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import AddActivity from "../../Pages/Admin/Activities/AddActivity";
import Admin from "../../Pages/Admin/Admin/Admin";
import Home from "../../Pages/Home/Home/Home";
import Profile from "../../Pages/Profile/Profile/Profile";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";
import SignUp from "../../Pages/SignIn/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>404</div>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/activities'),
                element: <Home></Home>
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            },
            { path: '/addActivity', element: <AddActivity></AddActivity> },
            { path: '/profile', element: <Profile></Profile> }
        ]
    },
    { path: '/signin', element: <SignIn></SignIn> },
    { path: '/signup', element: <SignUp></SignUp> },
])