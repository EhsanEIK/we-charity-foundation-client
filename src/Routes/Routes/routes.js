import { createBrowserRouter } from "react-router-dom";
import AddActivity from "../../Pages/Admin/Admin/AddActivity";
import Admin from "../../Pages/Admin/Admin/Admin";
import Header from "../../Pages/Shared/Header/Header";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";
import SignUp from "../../Pages/SignIn/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>
    },
    { path: '/signin', element: <SignIn></SignIn> },
    { path: '/signup', element: <SignUp></SignUp> },
    { path: '/admin', element: <Admin></Admin> },
    { path: '/addActivity', element: <AddActivity></AddActivity> },
])