import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user:null};

export function authentication(state = initialState, action) {
   switch (action.type) {
      case userConstants.LOGIN_SUCCESS:
         return {
            ...state,
            isLoggedIn: true,
            user: action.user
         };
      case userConstants.LOGOUT:
         return {
            ...state,
            isLoggedIn: false,
            user: null
         };
      default:
         return state
   }
}