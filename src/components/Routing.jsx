import React ,{lazy,Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'
//import About from './About';
import Contact from "./Contact";
import Home from "./Home";
import NotFound from './NotFound';
import ResMenu from './ResMenu';
import Shimmer from './Shimmer';
import Cart from './Cart';
///import Grocery from './Grocery';


const Grocery =lazy(()=> import('./Grocery'))
const About =lazy(() => import('./About'))
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
             <Route path="/about" element={
                <Suspense fallback={<Shimmer/>}>
                    <About/>
                </Suspense>
             }></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>

            <Route path="/grocery" element={
                        <Suspense fallback={<h1>Loading . . .</h1>}>
                                <Grocery />
                        </Suspense>
                        }>

             </Route>

            <Route path="/restaurants/:resId" element={<ResMenu/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}

export default Routing