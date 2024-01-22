import React from "react";
import ReactDOM from 'react-dom/client';
import  '../index.css';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom"
import Routing from "./components/Routing";

// React.createElement  => React Element(JS object)  ===> Html Element(Render)
// const element = React.createElement("h1",{id:"heading"},"Namste React!!");

// Babel converts JSX into React Element ===>  JS(Which browser can undersdtand) ===> Html Element(render)




const App = ()=>{
    return (
        <div className="app">
            <Header/>
            
            <Routing/>
            
            {/* Footer */}
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
            );

//<RouterProvider router={routes}/>
