import { vocabularyConstants } from "../_constants";

const initialState = {
   getAllAnswer: [],
   currentCategoryIndex: 0
}

export function vocabulary(state = initialState, action) {
   switch(action.type) {
      case vocabularyConstants.COMPLETED_ANSWER:
         return {
            ...state,
            getAllAnswer : action.payload
         }
      case vocabularyConstants.SET_CURRENT_CATEGORY_INDEX:
         return {
            ...state,
            currentCategoryIndex: action.payload
         }
      default:
         return state
   }
}