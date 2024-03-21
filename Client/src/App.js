import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./app.scss"
import Search from "./pages/Search/Search";
import Success from "./pages/success";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SignUp/>,
      },
      {
        path: "/signIn",
        element: <SignIn/>,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Products />,
      },
      {
        path:"/success",
        element:<Success />
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/book/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
