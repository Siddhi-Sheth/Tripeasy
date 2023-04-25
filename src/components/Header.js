import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className='nav-logo'><img src="./images/logo.svg" alt="logo" /></Navbar.Brand>
          <li className='nav-items'>
            <a href="/"><span className="material-symbols-outlined item-icon">edit</span>Review</a>
            <a href="/"><span className="material-symbols-outlined item-icon">favorite</span>Trips</a>
            <a href="/"><span className="material-symbols-outlined item-icon">notifications</span>Alerts</a>
            <button type='submit' className='sign-in-btn' style={{"border-radius": "0%"}}>Sign in</button>
            <a href="/"><span className="material-symbols-outlined item-icon">shopping_cart</span>Cart</a>
          </li>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
