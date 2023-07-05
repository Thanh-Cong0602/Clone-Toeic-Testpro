import React from 'react'
import './PracticeSection.css'
import Leaderboard from '../../../Assets/leaderboard.webp'
function PracticeSection() {
   return (
      <div className='Dashboard'>
         <div className='leaderboard'>
            <img src={Leaderboard} alt='Leaderboard'/>
         </div>
         <div className='text'>
            <h1>Free Online TOEIC Test 2023</h1>
            <p>
               <span>Welcome to </span>
               <strong>TOEIC Test Pro</strong>
               <span>a free TOEIC website/ app that provides learners with numerous practice tests divided into parts, mock tests as well as vocabulary and grammar exercises. Start off your journey of conquering the TOEIC certificate with practice tests on our website/app now!</span>
            </p>
         </div>


         <div className='PracticeTopics'>
            <div className='Toeic-Topics-btn'>
               <div className='Toeic-Subject-Tabs'>
                  <div className='Tab-Content'>
                     Listening & Reading
                  </div>
               </div>
            </div>


         </div>

         <div></div>
      </div>
   )
}

export default PracticeSection