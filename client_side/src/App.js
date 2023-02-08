import React from "react"
import Reservation from "./pages/reservations/Reservation"
import Home from "./pages/home/Home"
import Navbar from "./components/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App()
{


  const router = createBrowserRouter([
    
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/reservations",
          element: <Reservation/>
        }

    
  ])
  
  return (
    <div className = "App">
      <RouterProvider router = {router} />
    </div>
  )

}

export default App;