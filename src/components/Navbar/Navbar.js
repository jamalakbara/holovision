import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';

import './navbar.scss'

const Navbar = ({onClick, navLink}) => {
  function handleClick(target) {
    target.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="navbar">
      <Link className='navbar__logo' to="/">
        <Logo />
      </Link>

      <div className='navbar__links'>
        {
          navLink.map(link => (
            <Link key={link.key} className="navbar__link" onClick={() => handleClick(link.to)}>
              {link.label}
            </Link>
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar