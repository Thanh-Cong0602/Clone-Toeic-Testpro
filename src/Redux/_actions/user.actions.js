import { userConstants } from '../_constants'

export const userActions = {
   login,
   logout,
   register
}

function login(data) {
   localStorage.setItem('user', JSON.stringify(data.data.token));
   localStorage.setItem('isLoggedIn', true)
   return (dispatch) => {
      dispatch(success(data))
   }
   function success(data) {
      return { type: userConstants.LOGIN_SUCCESS, data }
   }
}

function logout() {
   localStorage.removeItem('user');
   localStorage.setItem('isLoggedIn', false);
   return { type: userConstants.LOGOUT };

}

function register(user) {

}