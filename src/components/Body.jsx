import Login from "./Login.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Browse from "./Browse.jsx";
import app from "../App.jsx";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );

}

export default Body;