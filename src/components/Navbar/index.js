import {NavStyle} from './styles'

import Logo from '../../assets/img/logotipo.png'

import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <NavStyle>
      <div className="container">
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={Logo} className="img-fluid" loading="lazy" alt="logo da Pargos Club" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#planos">Planos</Nav.Link>
            <Nav.Link href="#beneficios">Benefícios</Nav.Link>
            <Nav.Link href="#informacoes">Informações</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    </NavStyle>
  )
}

export default NavbarComponent;
