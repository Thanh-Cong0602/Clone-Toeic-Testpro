import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Person, Lock } from 'react-bootstrap-icons';
import { userActions } from '../../Redux/_actions';
import { toast } from "react-toastify";
import './LoginPage.css'
import { loginAPI } from '../../Api/Service/user.service'
let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
function LoginPage() {
   const [inputs, setInputs] = useState({
      username: '',
      password: ''
   })
   const { username, password } = inputs;
   const dispatch = useDispatch()
   const navigate = useNavigate();
   function handleChange(e) {
      const { name, value } = e.target;
      setInputs(inputs => ({ ...inputs, [name]: value }))
      // variable name have value as email or password, 
      // so if you get value of variable name, you must use [name of variable].
   }
   
   function handleSubmit(e) {
      e.preventDefault()
      if (!username || !password) {
         const messageWarn = 'You need to enter all the information!!!'
         toast.warn(messageWarn, { autoClose: 1000 })
      }
      else {
         loginAPI('login', inputs).then((res) => {
            const data = res.data
            dispatch(userActions.login(data))
            toast.success(data.message, { autoClose: 1000 })
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
            <div className='title'>ĐĂNG NHẬP</div>
            <div className='input-item'>
               <div className='icon'>
                  <Person size={30}></Person>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Nhập tài khoản'
                     name='username' value={inputs.username} onChange={handleChange} />
               </div>
            </div>
            <div className='input-item'>
               <div className='icon'>
                  <Lock size={30}></Lock>
               </div>
               <div className='text'>
                  <input type='password' placeholder='Nhập mật khẩu'
                     name='password' value={inputs.password} onChange={handleChange} />
               </div>
            </div>
            <div className='forgotPass'>
               Quên mật khẩu
            </div>
            <div className='login-btn-wrapper'>

               <input className='login-btn' type='submit' value={"LOGIN"} />
            </div>
            <div className='or-login-with'>
               <div className='line'></div>
               <div>
                  <span>Hoặc đăng nhập với</span>
               </div>
               <div className='line'></div>
            </div>
            <div className='login-with-gg'>
               <span>Đăng nhập bằng google</span>
            </div>
            <div className='register'>
               <p>Bạn chưa có tài khoản ?
                  <Link to={"/register"} className='no-underline'>
                     <span> Đăng ký ngay</span>
                  </Link></p>
            </div>
         </form>
      </div>
   );
}

export default LoginPage;