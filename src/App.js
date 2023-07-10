import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import VocabularyPage from './Pages/VocabularyPage/VocabularyPage';
import VocabularyByTopicPage from './Pages/VocabularyPage/VocabularyByTopicPage/VocabularyByTopicPage';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
   const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
               <Route path="/" element={<HomePage />} />
            </Routes>
            <Routes >
               <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />} />
            </Routes>
            <Routes>
               <Route path="/vocabulary" element={<VocabularyPage />}></Route>
            </Routes>
            <Routes>
               <Route path="/vocabularybytopic" element={<VocabularyByTopicPage />}></Route>
            </Routes>
            <Footer />
         </BrowserRouter>
         <ToastContainer className="toast-position"
        position="top-center"></ToastContainer>
      </div>
   );
}

export default App;
