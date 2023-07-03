import { userConstants } from '../_constants'

export const userActions = {
   login,
   logout
}

function login(data) {
   localStorage.setItem('user', JSON.stringify(data.data.token));
   return (dispatch) => {
      dispatch(success(data))
   }
   function success(data) {
      return { type: userConstants.LOGIN_SUCCESS, data }
   }
}

function logout() {
   localStorage.removeItem('user');
   return { type: userConstants.LOGOUT };
}
