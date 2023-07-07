import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Person, Envelope, PersonCircle, Key, GeoAlt, TelephoneFill, PersonCheck } from 'react-bootstrap-icons/dist';
import { toast } from "react-toastify"
import { registerAPI } from '../../Api/Service/auth.service';
import './RegisterPage.css'
function RegisterPage() {
   const [user, setUser] = useState(
      {
         username: '',
         password: '',
         confirmPassword: '',
         role: '',
         surname: '',
         name: '',
         email: '',
         dateOfBirth: '',
         address: '',
         phone: '',
         age: ''
      }
   );
   const navigate = useNavigate();
   function handleChange(e) {
      const { name, value } = e.target;
      setUser(user => ({ ...user, [name]: value }));
   }

   function handleSubmit(e) {
      e.preventDefault();
      console.log(user)
      if (user.confirmPassword !== user.password) {
         const messageError = "Password and Confirm password don't match"
         toast.error(messageError, { autoClose: 1000 })
      }
      else if (!user.username || !user.password || !user.confirmPassword || !user.role
         || !user.surname || !user.name || !user.email) {
         const messageWarn = "You need to enter all the information!!!"
         toast.warn(messageWarn, { autoClose: 1000 })
      }
      else {
         registerAPI('accounts/register', user).then((res) => {
            toast.success(res.data.message, { autoClose: 1000 })
            navigate('/login')
         }).catch((error) => {
            toast.error(error.response.data.message, { autoClose: 1000 })
         })
      }
   }

   return (
      <div className='loginPage'>
         <form onSubmit={handleSubmit} className='loginForm' >
            <div className='title'>CREATE AN ACCOUNT</div>
            <div className='input-item'>
               <div className='icon'>
                  <PersonCircle size={25}></PersonCircle>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter username'
                     name='username' value={user.username} onChange={handleChange} required />
               </div>
            </div>

            <div className='input-item'>
               <div className='icon'>
                  <Key size={25}></Key>
               </div>
               <div className='text'>
                  < input type='password' placeholder='Enter your password'
                     name='password' value={user.password} onChange={handleChange} required />
               </div>
            </div>

            <div className='input-item'>
               <div className='icon'>
                  <Key size={25}></Key>
               </div>
               <div className='text'>
                  <input type='password' placeholder='Enter your confirm password'
                     name='confirmPassword' value={user.confirmPassword} onChange={handleChange} required />
               </div>
            </div>

            <div className='choose-item'>
               <div>
                  <span>Choose Role</span>
               </div>
               <div>
                  <input type='radio' name="role" value="user"
                     checked={user.role === "user"} onChange={handleChange} required />
                  <label>User</label>
               </div>
               <div>
                  <input type='radio' name="role" value="admin"
                     checked={user.role === "admin"} onChange={handleChange} required />
                  <label>Admin</label>
               </div>
            </div>

            <div className='input-item'>
               <div className='icon'>
                  <Person size={25}></Person>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter your surname'
                     name='surname' value={user.surname} onChange={handleChange} required />
               </div>
            </div>

            <div className='input-item'>
               <div className='icon'>
                  <Person size={25}></Person>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter your name'
                     name='name' value={user.name} onChange={handleChange} required />
               </div>
            </div>

            <div className='input-item'>
               <div className='icon'>
                  <Envelope size={25}></Envelope>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter your email' required
                     name='email' value={user.email} onChange={handleChange} />
               </div>
            </div>
            <div className='dateofBirth'>
               <label for="birthday">Birthday:</label>
               <input type="date" id="birthday" name="dateOfBirth"
                  value={user.dateOfBirth ? user.dateOfBirth.toString().split('T')[0] : ''}
                  onChange={handleChange} />
            </div>

            <div className='input-item'>
               <div className='icon'>
                  <GeoAlt size={25}></GeoAlt>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter your address'
                     name='address' value={user.address} onChange={handleChange} />
               </div>
            </div>

            <div className='input-item'>
               <div className='icon'>
                  <TelephoneFill size={20}></TelephoneFill>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter your phone'
                     name='phone' value={user.phone} onChange={handleChange} />
               </div>
            </div>

            <div className='input-item'>
               <div className='icon'>
                  <PersonCheck size={25}></PersonCheck>
               </div>
               <div className='text'>
                  <input type='number' placeholder='Enter your age'
                     name='age' value={user.age} onChange={handleChange} />
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