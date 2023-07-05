import React from 'react'
import './HeroSection.css'
import LogoIcon from '../../../Assets/app-icon.png'
const HeroSection = () => {
   return (
      <div className='heroSection'>
         <div className='information'>
            <div className='logo'>
               <img src={LogoIcon} alt='LogoIcon'/>
            </div>
            <div className='info-text'>
               <div className='app-info-title'>
                  <span className='app-info-name'>TOEIC</span>
                  <span className='app-info-name-posfix'>Test Pro</span>
               </div>
               <div className='app-info-subtitle'>
                  An amazing app for TOEIC test-takers
               </div>
            </div>
         </div>

         <div className='app-platform'>
            <div className='download-app'>
               <div className='download-app-btn'>
                  TCN
               </div>
               <div className='download-app-btn'>
                  TCN
               </div>
            </div>
            <div class="qr-app-container">
            </div>
         </div>
      </div>
   )
}

export default HeroSection
