import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

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
               <Route path="/register" element={isLoggedIn ? <Navigate to="/" replace /> : <RegisterPage />} />
            </Routes>
            <Footer />
         </BrowserRouter>
         <ToastContainer className="toast-position"
            position="top-center"></ToastContainer>
      </div>
   );
}

export default App;