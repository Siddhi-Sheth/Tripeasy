import './App.css';
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Review from './pages/Review/Review';
import Home from './pages/Home/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/trips" element={<Review/>}/>
          <Route path="/alerts" element={<Review/>}/>
          <Route path="/signin" element={<Review/>}/>
          <Route path="/cart" element={<Review/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>  
  );
}

export default App;
