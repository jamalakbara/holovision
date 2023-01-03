import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './navbar.scss'

const Navbar = () => {
  const [navlink, setNavlink] = useState(
    [
      {
        key: 1,
        label: "Home",
        to: "/"
      },
      {
        key: 2,
        label: "Solution",
        to: "/solution"
      },
      {
        key: 3,
        label: "Features",
        to: "/features"
      },
      {
        key: 4,
        label: "Products",
        to: "/products"
      },
      {
        key: 5,
        label: "About Us",
        to: "/about-us"
      },
    ]
  );

  return (
    <nav className="navbar">
      <Link className='navbar__logo' to="/">
        <Logo />
      </Link>

      <div className='navbar__links'>
        {
          navlink.map(link => (
            <Link key={link.key} className="navbar__link" to={link.to}>
              {link.label}
            </Link>
          ))
        }
      </div>
    </nav>
  )
}

export default Navbar