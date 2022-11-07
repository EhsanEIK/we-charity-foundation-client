import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Activities from "../../Pages/Admin/Admin/Activities/Activities";
import AddActivity from "../../Pages/Admin/Admin/Activities/AddActivity";
import Home from "../../Pages/Home/Home/Home";
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
                element: <Activities></Activities>
            },
            { path: '/addActivity', element: <AddActivity></AddActivity> },
        ]
    },
    { path: '/signin', element: <SignIn></SignIn> },
    { path: '/signup', element: <SignUp></SignUp> },
])