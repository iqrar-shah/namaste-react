import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from "./Contact";
import Home from "./Home";
import NotFound from './NotFound';
import RestaurantDetails from './RestaurantDetails';
const Routing =()=>{

    // const routes =BrowserRouter([
  
//     {
//         path:"about",
//         element:<About/>
//     },
//     {
//         path:"contact",
//         element:<Contact/>
//     }
// ]);
    return(
        <Routes>
            <Route 
                path="/"  
                element={<Home/>} 
                errorElement={<NotFound/>}>
            </Route>
             <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/restaurantDetails/:resId" element={<RestaurantDetails/>}></Route>
        </Routes>
    )
}

export default Routing