import React  , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import './Navbar.css'

const Navbar = ()=>{
  const [click , setClick]  = useState(false)
  const [button , setButton] = useState(true)
  
  // برای تغییر ایکون از همبرگر منو به ضربدر
  const handleClick = () =>{
    setClick(!click)
  }

  const closeMobileMenu = () =>{
    setClick(false)
  }

  // نشان دادن یا هاید کردن دکمه با بزرگ و کوچک شدن صفحه نمایش
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  // نشون داده میشه با استفاده از یوز افکت از این کار جلوگیری میشه sign up هرموقع برنامه رفرش میشه دکمه ی 
  useEffect(()=>{
    showButton()
  },[])

  window.addEventListener('resize' , showButton)

  return(
      <>
        <nav className="navbar">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                TRVL <i class='fab fa-typo3'></i>
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                  Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
                  Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link" onClick={closeMobileMenu}>
                  Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sign-up" className="nav-link-mobile nav-link" onClick={closeMobileMenu}>
                  Sign Up
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
          </div>

        </nav>
      </>
  )
}

export default Navbar