import './App.css';
import "./style.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
