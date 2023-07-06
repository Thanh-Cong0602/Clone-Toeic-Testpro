import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Navbar />
            <Routes >
               <Route path="/register" element={isLoggedIn ? <Navigate to="/" replace /> : <RegisterPage />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;