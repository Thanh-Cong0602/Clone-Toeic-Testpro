import React from 'react'
import '../../App.css'
import './Header.css'
import Logo from '../../Assets/logo.webp'
function Header() {
   return (
      <div className='header'>
         <div className='navbar-header'>
            <div className='sub-nav-header'>
               <div className='logo'>
                  <a href='#tcn'>
                     <img src={Logo} alt="Logo Website" />
                  </a>
               </div>

               <div className='app-navbar-buttons'>
                  <div className='app-download-btn'>
                     My test
                  </div>
                  <div className='app-download-btn'>
                     My test
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Header
