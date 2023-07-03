import React from 'react'
import './Footer.css'
import Logo from '../../Assets/logo.webp'
import Dmca from '../../Assets/dmca.png'
import { Link } from 'react-router-dom'
function Footer() {
   const dmca_link = "https://www.dmca.com/Protection/Status.aspx?id=32d407d0-1f6f-40d9-8365-61f14b312a39&cdnrdr=1&refurl=https://toeic-testpro.com/"
   return (
      <div>
         <div className='main-footer'>
            <div className='main-footer-flex'>
               <div className='footer-left'>
                  <div className='logo'>
                     <img src={Logo} alt="Logo Website" />
                  </div>
                  <div className='dmca'>
                     <Link to={dmca_link}>
                        <img src={Dmca} alt="Logo Website" />
                     </Link>
                  </div>
               </div>
               <div className='footer-center'>
                  <Link className='center-link'>Home</Link>
                  <Link className='center-link'>Practice L&R</Link>
                  <Link className='center-link'>Practice S&W</Link>
                  <Link className='center-link'>Test</Link>
                  <Link className='center-link'>Grammar</Link>
                  <Link className='center-link'>Vocabulary</Link>
                  <Link className='center-link'>Blog</Link>
               </div>
               <div className='footer-right'>
                  <Link className='center-link'>About Us</Link>
                  <Link className='center-link'>Practice L&R</Link>
                  <Link className='center-link'>Practice S&W</Link>
                  <Link className='center-link'>Test</Link>
               </div>
            </div>
         </div>
         <div className='below-footer'>

         </div>
      </div>
   )
}

export default Footer