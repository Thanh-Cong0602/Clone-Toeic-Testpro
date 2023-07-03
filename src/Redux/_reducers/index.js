import { combineReducers } from "@reduxjs/toolkit";
import { registration } from "./register.reducer";
import { authentication } from './authentication.reducer';
const rootReducer = combineReducers({
   registration,
   authentication
})

export default rootReducer