import { vocabularyConstants } from "../_constants";

export const vocabularyActions = {
   getAnswerByTopic
}

function getAnswerByTopic(data) {
   return {
      type: vocabularyConstants.COMPLETED_ANSWER,
      data: data
   }
}