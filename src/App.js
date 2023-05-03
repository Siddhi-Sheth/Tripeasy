import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Review from './pages/Review/Review';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn';
import Alerts from './pages/Alerts';
import Trips from './pages/Trips';
import Basket from './pages/Basket';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/trips" element={<Trips/>}/>
          <Route path="/alerts" element={<Alerts/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/basket" element={<Basket/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>  
  );
}

export default App;
