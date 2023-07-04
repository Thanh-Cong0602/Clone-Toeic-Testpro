import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Person, Lock, Envelope } from 'react-bootstrap-icons';
// import { userActions } from '../../Redux/_actions'
import { toast } from "react-toastify"
import { registerAPI } from '../../Api/Service/auth.service';
function RegisterPage() {
   const [user, setUser] = useState(
      {
         name: '',
         username: '',
         password: '',
         confirmPassword: '',
         role: 'admin'
      }
   );
   const dispatch = useDispatch();
   const navigate = useNavigate();
   function handleChange(e) {
      const { name, value } = e.target;
      setUser(user => ({ ...user, [name]: value }));
   }

   function handleSubmit(e) {
      e.preventDefault();
      if (user.confirmPassword !== user.password) {
         const messageError = "Password and Confirm password don't match"
         toast.error(messageError, { autoClose: 1000 })
      }
      else if (!user.name || !user.username || !user.password || !user.confirmPassword) {
         const messageWarn = "You need to enter all the information!!!"
         toast.warn(messageWarn, { autoClose: 1000 })
      }
      else {
            registerAPI('register', user).then((res) => {
            toast.success(res.data.message, { autoClose: 1000 })
            navigate('/login')
         }).catch((error) => {
            toast.error(error, { autoClose: 1000 })
         })
      }
   }

   return (
      <div className='loginPage'>
         <form onSubmit={handleSubmit} className='loginForm' >
            <div className='title'>CREATE AN ACCOUNT</div>
            <div className='input-item'>
               <div className='icon'>
                  <Person size={30}></Person>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter your name'
                     name='name' value={user.name} onChange={handleChange} />
               </div>
            </div>
            <div className='input-item'>
               <div className='icon'>
                  <Envelope size={25}></Envelope>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Email (Account)'
                     name='username' value={user.username} onChange={handleChange} />
               </div>
            </div>
            <div className='input-item'>
               <div className='icon'>
                  <Lock size={25}></Lock>
               </div>
               <div className='text'>
                  < input type='password' placeholder='Enter your password'
                     name='password' value={user.password} onChange={handleChange} />
               </div>
            </div>
            <div className='input-item'>
               <div className='icon'>
                  <Lock size={25}></Lock>
               </div>
               <div className='text'>
                  <input type='password' placeholder='Enter your confirm password'
                     name='confirmPassword' value={user.confirmPassword} onChange={handleChange} />
               </div>
            </div>

            <div className='login-btn-wrapper'>
               <input className='login-btn' type='submit' value={"REGISTER"} />
            </div>
            <div className='or-login-with'>
               <div className='line'></div>
               <div>
                  <span>Or Sign up with</span>
               </div>
               <div className='line'></div>
            </div>

            <div className='register'>
               <p>Have an account already?
                  <Link to={"/login"} className='no-underline'>
                     <span> Please login here</span>
                  </Link></p>
            </div>
         </form>
      </div>
   );
}

export default RegisterPage;