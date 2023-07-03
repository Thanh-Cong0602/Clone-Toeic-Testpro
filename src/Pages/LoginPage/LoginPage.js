import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Person, Lock } from 'react-bootstrap-icons';
import { userActions } from '../../Redux/_actions';
import { toast } from "react-toastify";
import './LoginPage.css'
import { loginAPI } from '../../Api/Service/auth.service'

function LoginPage() {
   const [data, setData] = useState({
      username: '',
      password: ''
   })
   const { username, password } = data;
   const dispatch = useDispatch()
   const navigate = useNavigate();

   function handleChange(e) {
      const { name, value } = e.target;
      setData(data => ({ ...data, [name]: value }))

   }

   function handleSubmit(e) {
      e.preventDefault()
      if (!username || !password) {
         const messageWarn = 'You need to enter all the information!!!'
         toast.warn(messageWarn, { autoClose: 1000 })
      }
      else {
         console.log(data)
         loginAPI('accounts/login', data).then((res) => {
            dispatch(userActions.login(res.data))
            toast.success(res.data.message, { autoClose: 1000 })
            navigate('/')
         }).catch((error) => {
            toast.error(error, { autoClose: 1000 })
         })
      }
   }

   useEffect(() => {
      dispatch(userActions.logout());
   }, []);

   return (
      <div className='loginPage'>
         <form onSubmit={handleSubmit} className='loginForm' >
            <div className='title'>LOGIN</div>
            <div className='input-item'>
               <div className='icon'>
                  <Person size={30}></Person>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter your account'
                     name='username' value={data.username} onChange={handleChange} />
               </div>
            </div>
            <div className='input-item'>
               <div className='icon'>
                  <Lock size={30}></Lock>
               </div>
               <div className='text'>
                  <input type='password' placeholder='Enter your password'
                     name='password' value={data.password} onChange={handleChange} />
               </div>
            </div>
            <div className='forgotPass'>
               Forgot password
            </div>
            <div className='login-btn-wrapper'>

               <input className='login-btn' type='submit' value={"LOGIN"} />
            </div>
            <div className='or-login-with'>
               <div className='line'></div>
               <div>
                  <span>Or Login with</span>
               </div>
               <div className='line'></div>
            </div>
            <div className='login-with-gg'>
               <span>Sgin in with google</span>
            </div>
            <div className='register'>
               <p>Do you have any accounts ?
                  <Link to={"/register"} className='no-underline'>
                     <span>Sign up</span>
                  </Link></p>
            </div>
         </form>
      </div>
   );
}

export default LoginPage;