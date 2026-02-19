import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './navbar.scss'

const Navbar = ({ onClick, navLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for sticky navbar

      if (navLink) {
        navLink.forEach(link => {
          if (link.to.current) {
            const sectionTop = link.to.current.offsetTop;
            const sectionHeight = link.to.current.offsetHeight;

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionTop + sectionHeight
            ) {
              setActiveLink(link.label);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLink]);

  function handleClick(target, label) {
    if (target.current) {
      target.current.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(label);
    setIsOpen(false);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link
          className='navbar__logo'
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveLink('Home');
          }}
        >
          <Logo />
        </Link>

        <div className={`navbar__hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
          {navLink && navLink.map(link => (
            <div
              key={link.key}
              className={`navbar__link ${activeLink === link.label ? 'active' : ''}`}
              onClick={() => handleClick(link.to, link.label)}
            >
              {link.label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar