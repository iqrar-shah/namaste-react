import React, { useContext, useEffect, useState } from 'react'
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import {UserContext} from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () =>{
    const logoUrl=LOGO_URL;
    const [btnName,setBtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();

    //with dependency array, useEffect will get called only once after Component is rendered
    //without dependency array, useEffect will get called Every time your component rendered 
    //and component is rerendered every time state get changed
    useEffect(()=>{
    //    console.log("Header: useEffect");
    },[]);

    const user=useContext(UserContext);

    // subscribe to store using selector
    const cartItems =useSelector(store => store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between bg-orange-200 shadow-xl mb-8">
            <div className="w-20">
                <img src={logoUrl} alt="logo-image"/>
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4'>
                    <li className='px-4'>Status:{onlineStatus ? '✔':'❌'}</li>
                    <li className='px-4'><Link to="/">Home</Link></li>
                    <li className='px-4'><Link to="/about">About us</Link></li>
                    <li className='px-4'><Link to="/contact">Contact us</Link></li>
                    <li className='px-4'><Link to="/grocery">Grocery</Link></li>

                    <li className='px-4  font-bold text-2xl'><Link to="/cart">Cart({cartItems.length})</Link></li>               
                    <div className="px-4" onClick={ ()=>{
                                                            btnName === 'Login' ?
                                                            setBtnName('Logout'):
                                                            setBtnName('Login')} 
                                                        }>{btnName}</div>
                    <li className='px-4'><Link >{user}</Link></li>               

                 </ul>
            </div>
        </div>
    )
 }

export default Header