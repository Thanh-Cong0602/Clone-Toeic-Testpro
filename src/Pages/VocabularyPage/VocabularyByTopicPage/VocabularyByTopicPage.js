import React, { useEffect, useState } from 'react'
import './VocabularyByTopicPage.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const url = "http://localhost:8000/listItems";

function VocabularyByTopicPage() {
   const [vocabularyList, setVocabularyList] = useState([]);
   useEffect(() => {
      axios.get(url).then((res) => {
         console.log(res.data[0].vocabulary)
         setVocabularyList(res.data[0].vocabulary)
      }).catch((err) => {
         console.log(err)
      })
   }, [])
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
                  <h2>Overview</h2>
                  <div className='overview-all-items'>
                        {
                           vocabularyList.map(item => (
                              <div key={item.id}>
                                 <Link to={"/"} className='link-item'>
                                    <div className='overview-item'>
                                       <span>{item.lexical}</span>
                                       <span>{item.vowel}</span>
                                       <span>{item.meaning}</span>
                                    </div>
                                 </Link>

                              </div>
                           ))
                        }
                  </div>
                  <Link to={"/"} className='btn-playGame'>
                     <div>

                     </div>
                  </Link>
                  
                  This is vocabulary by topic Page

               </div>

            </div>
         </div>
      </div>
   )
}

export default VocabularyByTopicPage
