import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";
import SignUp from "../../Pages/SignIn/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Main</div>
    },
    { path: '/signin', element: <SignIn></SignIn> },
    { path: '/signup', element: <SignUp></SignUp> },
])