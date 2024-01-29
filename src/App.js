import React from "react";
import ReactDOM from 'react-dom/client';
import  '../index.css';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom"
import Routing from "./components/Routing";
import {UserContext} from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";

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
                <Provider store={appStore}>
                    <UserContext.Provider value={"Iqrar"}>
                        <App/>
                    </UserContext.Provider>
                </Provider>
            </BrowserRouter>
            
            );

//<RouterProvider router={routes}/>
