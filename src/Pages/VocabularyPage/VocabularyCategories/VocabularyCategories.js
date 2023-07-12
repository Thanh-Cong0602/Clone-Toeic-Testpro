import React, { useEffect, useState } from 'react'
import './VocabularyCategories.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import { Link } from 'react-router-dom';
import { BookHalf, ArrowRight } from 'react-bootstrap-icons';
import { getVocabularyCategories } from '../../../Api/Service/vocabulary.service';
import { getVocabularyPractices } from '../../../Api/Service/vocabulary.service';
import { useDispatch } from 'react-redux';
import { vocabularyActions } from '../../../Redux/_actions';
import { useSelector } from 'react-redux';
function VocabularyCategories() {
   const listofAnswers = useSelector( state => state.vocabulary.getAllAnswer)
   console.log("Answer from user with topic Contracts")
   console.log(listofAnswers)
   const [categories, setCategories] = useState([]);
   const [practices, setPractices] = useState([]);
   const dispatch = useDispatch()

   useEffect(() => {
      getVocabularyCategories('listItems').then((res) => {
         setCategories(res.data)
      }).catch((err) => {
         console.log(err)
      })
      getVocabularyPractices('practices').then((res) => {
         setPractices(res.data)
      }).catch((err) => {
         console.log(err)
      })
   }, [])

   
   const handleCategoryClick = (categoryIndex) => {
      dispatch(vocabularyActions.setCurrentCategoryIndex(categoryIndex));
   };
   
   return (
      <div className='vocabulary-categories'>
         <div className='title'>
            <h1>
               Start your TOEIC Vocabulary Practice Test Now!
            </h1>
         </div>
         <div class="container">
            <div class="row">
               <div class="col-sm-8">
                  <h4>TOEIC VOCABULARY (BY TOPIC)</h4>
                  <div className='main-list-view'>
                     <div class="row">
                        <div class="col">
                           {
                              categories.slice(0, 9).map((item, index) => (
                                 <div key={item.id} >
                                    <Link to={item.link} className='link-item'
                                    onClick={() => handleCategoryClick(index)}>
                                       <div className='item'>
                                          <div className='item-left'>
                                             <BookHalf />
                                             <div className='text'>
                                                {item.title}
                                             </div>
                                          </div>
                                       </div>
                                    </Link>
                                 </div>
                              ))
                           }
                        </div>

                        <div class="col">
                           {
                              categories.slice(10, 19).map(item => (
                                 <div key={item.id}>
                                    <Link to={"/"} className='link-item'>
                                       <div className='item'>
                                          <div className='item-left'>
                                             <BookHalf />
                                             <div className='text'>
                                                {item.title}
                                             </div>
                                          </div>
                                       </div>
                                    </Link>
                                 </div>
                              ))
                           }
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-sm-4">
                  <h4>Other Practices</h4>
                  <div className='right-list'>
                     {
                        practices.map(item => (
                           <div key={item.id}>
                              <Link to={"/"} className='link-item'>
                                 <div className='item'>
                                    <div className='text'>
                                       {item.title}
                                    </div>
                                    <ArrowRight />
                                 </div>
                              </Link>
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default VocabularyCategories
