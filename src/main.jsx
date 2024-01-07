import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import NewCoffee from "./layout/newCoffee/NewCoffee";
import AuthContainer from "./layout/authContainer/AuthContainer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Body from "./layout/body/Body";
import UpdateCoffee from "./layout/updateCoffee/UpdateCoffee";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthContainer></AuthContainer>,
		children: [
			{
				path: "/",
				element: <Navigate to={"/home"}></Navigate>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "/home",
		element: <Body></Body>,
		loader: () => fetch("http://localhost:5000/coffee"),
	},
	{
		path: "/add-new-coffee",
		element: <NewCoffee></NewCoffee>,
	},
	{
		path: "/update-coffee/:ID",
		element: <UpdateCoffee></UpdateCoffee>,
		loader: ({ params }) =>
			fetch(`http://localhost:5000/coffee/${params.ID}`),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
