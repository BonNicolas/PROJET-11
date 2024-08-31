import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/nav';
import Logo from '../../assets/argentBankLogo.webp';


function Header() {
  return (
    <header className='main-header'>
      <Link className='main-header__logo' to="/">
        <img src={Logo} alt='Argent Bank Logo'/>
      </Link>
      <Nav />
    </header>
  )
}

export default Header