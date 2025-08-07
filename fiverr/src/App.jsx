import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Add from "./pages/add/Add";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./pages/register/Register";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Pay from "./pages/pay/pay";
import Success from "./pages/Sucess/Sucess";

function App() {

  const queryClient = new QueryClient()


  const Layout = ()=>{
    return(
      <div className="app">
        {/* ----to cache the fetch data --- */}
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
      
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },



      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  )
}

export default App
