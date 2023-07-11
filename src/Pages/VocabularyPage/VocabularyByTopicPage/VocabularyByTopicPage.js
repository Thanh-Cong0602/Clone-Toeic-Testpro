import React, { useEffect, useState } from 'react'
import './VocabularyByTopicPage.css'
import { getVocabularyByTopic } from '../../../Api/Service/vocabulary.service';
import { getQuestionsByTopic } from '../../../Api/Service/vocabulary.service';
import { X } from 'react-bootstrap-icons';
import { toast } from "react-toastify";
import { vocabularyActions } from '../../../Redux/_actions';
import { useDispatch } from 'react-redux';

function VocabularyByTopicPage() {
   const [vocabularyList, setVocabularyList] = useState([]);
   const [questions, setQuestions] = useState([]);
   const [showPlayGame, setShowPlayGame] = useState(false)
   const [currentQuestion, setCurrentQuestion] = useState({});
   const [selectedAnswers, setSelectedAnswers] = useState([]);
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const [isLastQuestion, setIsLastQuestion] = useState(false);
   const dispatch = useDispatch()

   useEffect(() => {
      getVocabularyByTopic('listItems').then((res => {
         setVocabularyList(res.data[0].vocabulary)
      })).catch((err) => {
         console.log(err)
      })
      // Get all questions from topic Contracts
      getQuestionsByTopic('questionsforTopic').then((res) => {
         setQuestions(res.data)
      }).catch((err) => {
         console.log(err)
      })
   }, [])

   useEffect(() => {
      if (questions.length > 0) {
         setCurrentQuestion(questions[currentQuestionIndex])
         setIsLastQuestion(currentQuestionIndex === questions.length - 1);
      }
   }, [questions, currentQuestionIndex])

   const handleQuestionClick = (questionIndex) => {
      setCurrentQuestionIndex(questionIndex)
   }

   const handleAnswerChange = (e) => {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[currentQuestionIndex] = e.target.value;
      setSelectedAnswers(updatedAnswers);
   }
   const handlePrevQuestion = () => {
      if (currentQuestionIndex > 0) {
         setCurrentQuestionIndex(currentQuestionIndex - 1)
      }
   }

   const handleNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
         setCurrentQuestionIndex(currentQuestionIndex + 1)
      }
   }

   const resetGame = () => {
      setSelectedAnswers([]);
      setCurrentQuestionIndex(0);
      setShowPlayGame(false);
      setIsLastQuestion(false);
   };

   const handleExitPlayGame = () => {
      const confirmExit = window.confirm("Are you sure you want to exit play game?");
      if (confirmExit) {
         resetGame();
      }
   }
   const handleSubmitAnswer = () => {
      if (selectedAnswers.length === 10) {
         dispatch(vocabularyActions.getAnswerByTopic(selectedAnswers))
         const messageSuccess = "You have completed all question!"
         toast.success(messageSuccess, { autoClose: 2000 })
         resetGame()
         console.log('Your answer are:', selectedAnswers);
      }
      else {
         const messageWarn = "You need to complete all questions!!!"
         toast.warn(messageWarn, { autoClose: 2000 })
      }
   };

   return (
      <div className='main-study-view'>
         <div className='main-study-flex'>
            <div className='study-layout-left'>
               <div className='title'>
                  <h2>TOEIC VOCABULARY: Contracts</h2>
               </div>
               <div className=''>
                  <span> Contracts</span>
               </div>
            </div>

            <div className='study-layout-right'>
               <div className='flash-card-overview'>
                  {!showPlayGame ? (
                     <div>
                        <h2>Overview</h2>
                        <div className='overview-all-items'>
                           {
                              vocabularyList.map(item => (
                                 <div key={item.id}>
                                    <div className='overview-item'>
                                       <span className='lexical'>{item.lexical}</span>
                                       <span className='vowel'>{item.vowel}</span>
                                       <span>{item.meaning}</span>
                                    </div>
                                 </div>
                              ))
                           }
                        </div>
                        <input type='submit' onClick={() => setShowPlayGame(true)}
                           className='btn-playGame' value={"Play game"} />
                     </div>
                  ) : (
                     <>
                        <div className='btn-questions-all'>
                           <div className='question-layout-left'>
                              {
                                 questions.map((item, index) => (
                                    <div className='question-item'
                                       key={item.id}
                                       onClick={() => handleQuestionClick(index)}>
                                       <div className='question-item-id'>{item.id}</div>
                                    </div>
                                 ))
                              }

                           </div>

                           <div className='question-layout-right'>
                              <button className='btn-exits' onClick={handleExitPlayGame}>
                                 <X className='icons'></X>
                              </button>
                           </div>
                        </div>
                        <div className='show-Question'>
                           {
                              currentQuestion &&
                              <div>
                                 <div className='question'>
                                    Question {currentQuestion.id}: {currentQuestion.question}
                                 </div>
                                 <div className='answer'>
                                    <input type='radio' id="answerA" name="answer" value="A"
                                       checked={selectedAnswers[currentQuestionIndex] === 'A'}
                                       onChange={handleAnswerChange}
                                    />
                                    <label htmlFor='answerA'>
                                       A. {currentQuestion.answerA}
                                    </label>
                                 </div>
                                 <div className='answer'>
                                    <input type='radio' id="answerB" name="answer" value="B"
                                       checked={selectedAnswers[currentQuestionIndex] === 'B'}
                                       onChange={handleAnswerChange}
                                    />
                                    <label htmlFor='answerB'>
                                       B. {currentQuestion.answerB}
                                    </label>
                                 </div>
                                 <div className='answer'>
                                    <input type='radio' id="answerC" name="answer" value="C"
                                       checked={selectedAnswers[currentQuestionIndex] === 'C'}
                                       onChange={handleAnswerChange} />
                                    <label htmlFor='answerC'>
                                       C. {currentQuestion.answerC}
                                    </label>
                                 </div>
                                 <div className='answer'>
                                    <input type='radio' id="answerD" name="answer" value="D"
                                       checked={selectedAnswers[currentQuestionIndex] === 'D'}
                                       onChange={handleAnswerChange} />
                                    <label htmlFor='answerD'>
                                       D. {currentQuestion.answerD}
                                    </label>
                                 </div>
                              </div>
                           }
                        </div>
                        <div className='btn-review'>
                           <button
                              className={`btn-prev ${currentQuestionIndex === 0 ? 'disable' : ''}`}
                              onClick={handlePrevQuestion}
                              disabled={currentQuestionIndex === 0}>Prev</button>
                           {isLastQuestion ? (
                              <button className='btn-submit' onClick={handleSubmitAnswer}>Submit</button>
                           ) : (
                              <button className='btn-next' onClick={handleNextQuestion}>Next</button>
                           )}

                        </div>
                     </>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default VocabularyByTopicPage
