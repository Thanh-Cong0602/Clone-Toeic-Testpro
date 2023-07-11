import { vocabularyConstants } from "../_constants";

const initialState = {
   getAllAnswer: []
}

export function vocabulary(state = initialState, action) {
   switch(action.type) {
      case vocabularyConstants.COMPLETED_ANSWER:
         return {
            ...state,
            getAllAnswer : action.data
         }
      default:
         return state
   }
}