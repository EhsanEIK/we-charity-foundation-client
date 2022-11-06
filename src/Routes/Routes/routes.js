import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Main</div>
    },
    { path: '/signin', element: <SignIn></SignIn> }
])