import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import GetPro from '../../Assets/get-pro.png'
import { CaretDown } from 'react-bootstrap-icons'

function Navbar() {
   const newLocal = 'menu-dropdown'
   return (
      <div className='navbar-header'>
         <div className='web-navbar css-responsive'>
            <div className='main-menu'>
               <div className='main-menu-wrap'>
                  <div className='menu-item-wrap'>
                     <Link className="custom-link" to={'/'}>
                        <div className='menu-item-title main-item'>Home</div>
                     </Link>
                  </div>
                  <div className='menu-item-wrap parent-menu'>
                     <Link to={'/'} className="custom-link">
                        <div className='menu-item-title'>
                           <span>Practice L&R</span>
                           <CaretDown size={20}></CaretDown>
                        </div>
                     </Link>
                     <div className={newLocal}>
                        <Link to={'/'} className="custom-link">
                           <div className='menu-item-dropdown'>
                              Part1: Photo
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'} >
                           <div className='menu-item-dropdown'>
                              Part2: Question - Response
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'}>
                           <div className='menu-item-dropdown'>
                              Conversations
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'}>
                           <div className='menu-item-dropdown'>
                              Short Talks
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'}>
                           <div className='menu-item-dropdown'>
                              Incomplete Sentences
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'}>
                           <div className='menu-item-dropdown'>
                              Text Completion
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'}>
                           <div className='menu-item-dropdown'>
                              Single Passages
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'}>
                           <div className='menu-item-dropdown'>
                              Double Passages
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'}>
                           <div className='menu-item-dropdown'>
                              Tripple Passages
                           </div>
                        </Link>
                     </div>
                  </div>

                  <div className='menu-item-wrap'>
                     <Link className="custom-link" to={'/'}>
                        <div className='menu-item-title'>
                           <span>Practice S&W</span>
                        </div>
                     </Link>
                  </div>

                  <div className='menu-item-wrap parent-menu'>
                     <Link className="custom-link" to={'/'}>
                        <div className='menu-item-title'>
                           <span>Test</span>
                           <CaretDown size={20}></CaretDown>
                        </div>
                     </Link>
                     <div className={newLocal}>
                        <Link to={'/'} className="custom-link">
                           <div className='menu-item-dropdown'>
                              Simulation Test
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'} >
                           <div className='menu-item-dropdown'>
                              Full Test
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'}>
                           <div className='menu-item-dropdown'>
                              Mini Test
                           </div>
                        </Link>
                     </div>
                  </div>

                  <div className='menu-item-wrap'>
                     <Link className="custom-link" to={'/'}>
                        <div className='menu-item-title'>
                           <span>Grammar</span>
                        </div>
                     </Link>
                  </div>

                  <div className='menu-item-wrap'>
                     <Link className="custom-link" to={'/'}>
                        <div className='menu-item-title'>
                           <span>Vocabulary</span>
                        </div>
                     </Link>
                  </div>

                  <div className='menu-item-wrap'>
                     <Link className="custom-link" to={'/'}>
                        <div className='menu-item-title'>
                           <span>Blog</span>
                        </div>
                     </Link>
                  </div>

                  <div className='menu-item-wrap parent-menu'>
                     <Link className="custom-link" to={'/'}>
                        <div className='menu-item-title'>
                           <span>TOEIC Tips</span>
                           <CaretDown size={20}></CaretDown>
                        </div>
                     </Link>
                     <div className={newLocal}>
                        <Link to={'/'} className="custom-link">
                           <div className='menu-item-dropdown'>
                              TOEIC Listening Tips
                           </div>
                        </Link>
                        <Link className="custom-link" to={'/'} >
                           <div className='menu-item-dropdown'>
                              TOEIC Reading Tips
                           </div>
                        </Link>
                     </div>
                  </div>
                  
                  <div className='menu-item-wrap'>
                     <Link className="custom-link" to={'/'}>
                        <div className='menu-item-img'>
                           <img src={GetPro} alt='Get Pro' />
                        </div>
                     </Link>
                  </div>
                  
                  <div className='menu-item-wrap'>
                     <Link className="custom-link" to={'/login'}>
                        <div className='menu-item-title'>
                           <span>Login</span>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
            <div className='search-and-languague-col'>
               languague
            </div>
         </div>
      </div>
   )
}

export default Navbar