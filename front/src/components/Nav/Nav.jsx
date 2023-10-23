import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom'; // NavLink agrega funcionalidades a Link, permitiendo diferenciar entre componentes seleccionados en pantalla
import './Nav.css';
import PATHROUTES from '../../helpers/PathRoutes.helper';

const Nav = (props) => { // sigue el tobogán
    return ( // renderizo SearchBar (ahora va a estar dentro de este componente Nav -highOrderComponent)
    <div className='nav-container'> 
    <NavLink
        to={PATHROUTES.HOME}
        activeclassname='active'
        className="nav-link"
      >HOME </NavLink>
      <NavLink
        to={PATHROUTES.ABOUT}
        activeclassname='active'
        className="nav-link"
      >ABOUT</NavLink>

      <NavLink 
      to={PATHROUTES.FAVORITES}
      activeclassname='active'
      className="nav-link"
      >FAVORITES</NavLink>

      <SearchBar onSearch={props.onSearch}/>
      
      <NavLink 
        to={PATHROUTES.LOGIN}
        activeclassname='active'
        className="nav-link"
        >Log out</NavLink>
    </div>
);
};

export default Nav;