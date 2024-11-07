import React from "react";
import {Header,Footer} from './index.js'
import { Outlet} from 'react-router-dom'
import ChatBox from "./ChatBot.jsx";
import FloatingButton from "./FloatingBot.jsx";




function Layout()
{
    
    return(
        <div className="w-screen">
            <Header/>
            <Outlet/>
            <Footer/>
            <FloatingButton /> 
        </div>
    )
}

export default Layout