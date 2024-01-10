import React, { Fragment, useState } from "react";
import './Navbar.css';
import travelLogo from '../../src/Assets/logo.png';
import { FiPhoneCall } from "react-icons/fi";
import { MdMenuOpen } from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const[showMobNavigation , setShowMobNavigation] = useState(false);

    return (
        <Fragment>
          
            <nav className={showMobNavigation? "no-header":"header"}>
                <div className="top-left">
                    <img className="header-logo" src={travelLogo} alt="travel logo" />
                </div>
                <div className="top-center">
                    <ul className="navigation-items">
                        <li>
                            <NavLink className="link-nav" to={"/"}>
                            Home
                            </NavLink>
                            </li>
                        <li><NavLink className="link-nav" to={"/Packages"}>
                        Packages
                        </NavLink>
                        </li>
                        <li className="link-nav">About Us</li>
                        <li className="link-nav">Contact Us</li>
                    </ul>
                </div>
                <div className="top-right">
                    <FiPhoneCall />
                    <span>+91 9812341230</span>
                </div>
                <MdMenuOpen onClick={()=>setShowMobNavigation(!showMobNavigation)} size={25} className="hamburger-menu" />
            </nav>
            {/* for mobile screen navigation users */}

            
            <div className={showMobNavigation? "mobile-nav-bar":"no-mobile-nav-bar"}>
            <AiOutlineClose onClick={()=>setShowMobNavigation(!showMobNavigation)} size={25} className="m-hamburger-menu" />
            <ul className="m-navigation-items">
                    <li>Home</li>
                    <li>Packages</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
            </ul>
            </div>
          
            
        
 
        </Fragment>
    )
}

export default Navbar;