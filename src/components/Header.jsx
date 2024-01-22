import React, { useEffect, useState } from 'react'
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () =>{
    const logoUrl=LOGO_URL;
    const [btnName,setBtnName]=useState("Login");

    //with dependency array, useEffect will get called only once after Component is rendered
    //without dependency array, useEffect will get called Every time your component rendered 
    //and component is rerendered every time state get changed
    useEffect(()=>{
       console.log("useEffect");
    },[]);

    return (
        <div className="header">
            <div className="logo-container">
                <img src={logoUrl} alt="logo-image"/>
            </div>
            <div className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>               
                    <div className="filter-btn" onClick={ ()=>{
                                                            btnName === 'Login' ?
                                                            setBtnName('Logout'):
                                                            setBtnName('Login')} 
                                                        }>{btnName}</div>
                 </ul>
            </div>
        </div>
    )
 }

export default Header