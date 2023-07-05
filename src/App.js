import './App.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Navbar />
            <HomePage />
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
