import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestroMenu from "./components/Restromenu";
import Errorpage from "./components/Errorpage";
import "./style.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import appstore from "./utils/Appstore";
const App = () => {
  return (
   <Provider store={appstore}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </Provider> 
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Errorpage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={approuter}/>)