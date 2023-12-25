import React, { useState } from 'react';
import './Navbar.css'
import CoffeeIcon from '@mui/icons-material/Coffee';
import CancelIcon from '@mui/icons-material/Cancel';
import AppsIcon from '@mui/icons-material/Apps';

const Navbar=()=> {

 //navbarın yukardan gelmesi için 
   const[navBar, setNavBar] = useState("menu");

// show navbar için fonksiyon
    const showNavBar = () =>{
        setNavBar("menu showNavbar");
    }
  
 // remove navbar için fonk
    const removeNavBar = () =>{
        setNavBar("menu");
    }

   return (
   <div className='navBar'>
    <div className="logoDiv">
    <CoffeeIcon className="iconCoffee" />
    <span> Kahve içelim</span>

    </div>
    <div className={navBar}>
        <ul>
            <li className='navList'>Ansayfa</li>
            <li className='navList'>Menü</li>
            <li className='navList'>Sepet</li>
            <li className='navList'>Hakkımızda</li>
            <li className='navList'>İletişim</li>
        </ul>
        <CancelIcon className='icon closeIcon' 
        onClick={removeNavBar}/>
    </div>

    <div className='buton1'>
    <button className="signUpBtn btn">Üye ol</button>
    <button className="LogInBtn btn">Giriş yap</button>
    </div>

    <AppsIcon className='icon menuIcon' onClick={showNavBar}/>
   </div>
   )
};

export default Navbar;
