import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import AddActivity from "../../Pages/Admin/Admin/AddActivity";
import Admin from "../../Pages/Admin/Admin/Admin";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";
import SignUp from "../../Pages/SignIn/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>404</div>,
        children: [
            { path: '/admin', element: <Admin></Admin> },
            { path: '/addActivity', element: <AddActivity></AddActivity> },
        ]
    },
    { path: '/signin', element: <SignIn></SignIn> },
    { path: '/signup', element: <SignUp></SignUp> },
])