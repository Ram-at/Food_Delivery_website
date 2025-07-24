import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./src/components/About.js";
import { Error } from "./src/components/Error.js";
import { Contact } from "./src/components/Contact.js";
import { RestuarantsMenu } from "./src/components/RestuarantsMenu.jsx";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";
import AddCart from "./src/components/AddCart.js";
const Applayout = () => {
  return (
    <div className="app">
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
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
        path: "/restaurant/:resId",
        element: <RestuarantsMenu />,
      },
      {
        path: "/cart",
        element: <AddCart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
