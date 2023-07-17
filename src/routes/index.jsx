import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, Home, Login, NotFound } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);

export default router