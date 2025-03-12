import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavSection from './components/Header/NavSection';
import Home from './pages/Home';


const Dashboard = () =>{
  return(
  <div>
    <NavSection />
    <Outlet />
    {/* <FooterCont /> */}
  </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [{
      path: "/",
      element: <Home />,
   }]
  },

]);

function App() {

  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
}

export default App
