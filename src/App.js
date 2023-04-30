import './App.css';
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/Footer';
import Review from './pages/Review/Review';
import Home from './pages/Home/Home';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import Alerts from './pages/Alerts';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/trips" element={<Review/>}/>
          <Route path="/alerts" element={<Alerts/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/cart" element={<Review/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>  
  );
}

export default App;
