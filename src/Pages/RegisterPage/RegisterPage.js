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
         age: 0
      }
   );
   const [errors, setErrors] = useState({
      username: '',
      password: '',
      confirmPassword: '',
      surname: '',
      name: '',
      email: '',
      address: '',
      age: '',
      phone: ''
   })
   const hasSpecialCharacters = (input) => {
      const regex = /[!@#$%^&*(),.?":{}|<>]/;
      return regex.test(input);
   };
   const isValidEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
   };
   const isValidPhoneNumber = (phoneNumber) => {
      const regex = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/
      return regex.test(phoneNumber);
   };
   const [hasEnteredAge, setHasEnteredAge] = useState(false);
   const navigate = useNavigate();
   const setError = (fileName, errorMessage) => {
      setErrors((error) => ({
         ...error,
         [fileName]: errorMessage
      }))
   }
   function handleChange(e) {
      const { name, value } = e.target;
      setUser(user => ({ ...user, [name]: name === 'age' ? parseInt(value) : value }));
      if (name === 'age') {
         setHasEnteredAge(true);
      }
      if (name === 'username') {
         let errorMessage = hasSpecialCharacters(value) ? 'Username cannot contain special characters.' : ''
         setError('username', errorMessage)
      }
      else if (name === 'password') {
         let errorMessage = (value.length < 8) ? 'Password must be at least 8 characters long.' : ''
         setError('password', errorMessage)
      }
      else if (name === 'confirmPassword') {
         let errorMessage = (value.length < 8) ? 'ConfirmPassword must be at least 8 characters long.' : ''
         setError('confirmPassword', errorMessage)
      }
      else if (name == 'surname') {
         let errorMessage = hasSpecialCharacters(value) ? 'Surname cannot contain special characters.' : ''
         setError('surname', errorMessage)
      }
      else if (name == 'name') {
         let errorMessage = hasSpecialCharacters(value) ? 'Name cannot contain special characters.' : ''
         setError('name', errorMessage)
      }
      else if (name == 'email') {
         let errorMessage = !isValidEmail(value) ? 'Invalid Email' : ''
         setError('email', errorMessage)
      }
      else if (name == 'age') {
         let errorMessage = (value < 0) ? 'Invalid age' : ''
         setError('age', errorMessage)
      }
      else if (name == 'phone') {
         let errorMessage = ( value.length > 11 ) ? 'Invalid Phone Number' : ''
         setError('phone', errorMessage)
      }
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
         console.log(user)
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
                     name='username' value={user.username} onChange={handleChange} />
               </div>
            </div>
            {errors.username && <div className='error-message'>{errors.username}</div>}
            <div className='input-item'>
               <div className='icon'>
                  <Key size={25}></Key>
               </div>
               <div className='text'>
                  < input type='password' placeholder='Enter your password'
                     name='password' value={user.password} onChange={handleChange} />
               </div>
            </div>
            {errors.password && <div className='error-message'>{errors.password}</div>}
            <div className='input-item'>
               <div className='icon'>
                  <Key size={25}></Key>
               </div>
               <div className='text'>
                  <input type='password' placeholder='Enter your confirm password'
                     name='confirmPassword' value={user.confirmPassword} onChange={handleChange} />
               </div>
            </div>
            {errors.confirmPassword && <div className='error-message'>{errors.confirmPassword}</div>}
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
                     name='surname' value={user.surname} onChange={handleChange} />
               </div>
            </div>
            {errors.surname && <div className='error-message'>{errors.surname}</div>}
            <div className='input-item'>
               <div className='icon'>
                  <Person size={25}></Person>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter your name'
                     name='name' value={user.name} onChange={handleChange} />
               </div>
            </div>
            {errors.name && <div className='error-message'>{errors.name}</div>}
            <div className='input-item'>
               <div className='icon'>
                  <Envelope size={25}></Envelope>
               </div>
               <div className='text'>
                  <input type='text' placeholder='Enter your email'
                     name='email' value={user.email} onChange={handleChange} />
               </div>
            </div>
            {errors.email && <div className='error-message'>{errors.email}</div>}
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
            {errors.phone && <div className='error-message'>{errors.phone}</div>}
            <div className='input-item'>
               <div className='icon'>
                  <PersonCheck size={25}></PersonCheck>
               </div>
               <div className='text'>
                  <input type='number' placeholder='Enter your age'
                     name='age' value={hasEnteredAge ? user.age : ''} onChange={handleChange} />
               </div>
            </div>
            {errors.age && <div className='error-message'>{errors.age}</div>}
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