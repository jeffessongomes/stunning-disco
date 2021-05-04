import {Nav} from './styles'

import Logo from '../../assets/img/logotipo.png'

export const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
          <a className="navbar-brand" href="#a">
          <img src={Logo} className="img-fluid" loading="lazy" alt="logo da Pargos Club" />
        </a>
        <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#a">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a">Planos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a">Benefícios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a">Informações</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar;
