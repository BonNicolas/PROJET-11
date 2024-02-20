import { NavLink } from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';



function Nav() {
  return (
    <nav className="main-nav">
      <NavLink className='main-nav__logo' to="/">
        <img src={Logo} alt='Argent Bank Logo'/>
      </NavLink>
      <NavLink className='main-nav__item' to="/sign-in">
        <FontAwesomeIcon icon={faCircleUser} className='main-nav__icon'/>
        Sign In
      </NavLink>
    </nav>
  )
}

export default Nav