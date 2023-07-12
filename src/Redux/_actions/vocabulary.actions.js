import { vocabularyConstants } from "../_constants";

export const vocabularyActions = {
   getAnswerByTopic,
   setCurrentCategoryIndex
}

function getAnswerByTopic(data) {
   return {
      type: vocabularyConstants.COMPLETED_ANSWER,
      payload: data
   }
}

function setCurrentCategoryIndex(categoryIndex) {
   return {
      type: vocabularyConstants.SET_CURRENT_CATEGORY_INDEX,
      payload: categoryIndex
   }
}