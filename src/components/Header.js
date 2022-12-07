import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import trolleyImg from '../assets/images/trolley.svg';
import SearchBar from './searchBar/SearchBar';
import { Categories } from './categories/Categories';
import  Login from '../components/Login/Login';

 export const Header = () => {
   let registro = 0;
  if(registro == 1)
  {
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
  
            <NavLink className='menu-link text-white' to='/favorites'></NavLink>
            <NavLink className='menu-link text-white' to='/favorites'></NavLink>
            
            <NavLink className='ms-lg-2' to=' '><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="black" class="bi bi-person-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg></NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  else
  {
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

          <NavLink className='menu-link text-white' to='/favorites'></NavLink>
          <NavLink className='menu-link text-white' to='/favorites'></NavLink>
          
          <NavLink className='ms-lg-2' to='/'><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="black" class="bi bi-person-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  }
}
export default Header
