import { createBrowserRouter } from "react-router-dom";
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
])