
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import trolleyImg from '../assets/images/trolley.svg';
import SearchBar from './searchBar/SearchBar';
import { Categories } from './categories/Categories';


export const Header = () => {
  return (
    <Navbar bg="success" expand="lg" className='navbar-black  bg-success  navbar'>
      <Container>
        <NavLink className='clothingParis text-white' to="/home">PRAYERS</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="ms-0 nav d-flex align-items-center">
            <NavLink className='menu-link text-white align-self-center' to='/home'>Menu Principal</NavLink>
            <NavLink className='menu-link text-white align-self-center' to='/Contacto'>Contacto</NavLink>
            <NavLink className='menu-link text-white' to='/favorites'>Favoritos</NavLink>
            {/* <Categories></Categories> */}
            <NavLink to='/trolley' className="ms-lg-2"><img className='svg' src={trolleyImg} alt='trolley'></img></NavLink>


          </Nav>

          {/* <Form className="d-flex me-0"> */}
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
