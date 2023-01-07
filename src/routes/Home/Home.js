import Button from '../../components/Button/Button'
import Features from '../Features/Features';
import CaseStudy from '../Case Study/Case_study';
import Product from '../Product/Product';
import Projects from '../Projects/Projects';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Why from '../Why/Why';
import Solution from '../Solution/Solution';
import How from '../How/How';
// import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.scss'
import About from '../About/About';
import './home.scss'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

const Home = () => {
  const targetSolution = useRef(null);
  const targetFeatures = useRef(null);
  const targetProducts = useRef(null);
  const targetAbout = useRef(null);
  const targetHome = useRef(null);

  const navlink = 
    [
      {
        key: 1,
        label: "Home",
        to: targetHome
      },
      {
        key: 2,
        label: "Solution",
        to: targetSolution
      },
      {
        key: 3,
        label: "Features",
        to: targetFeatures
      },
      {
        key: 4,
        label: "Products",
        to: targetProducts
      },
      {
        key: 5,
        label: "About Us",
        to: targetAbout
      },
    ]

  function handleClick(target) {
    target.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <nav className="navbar">
        <Link className='navbar__logo' to="/">
          <Logo />
        </Link>

        <div className='navbar__links'>
          {
            navlink.map(link => (
              <Link key={link.key} className="navbar__link" onClick={() => handleClick(link.to)}>
                {link.label}
              </Link>
            ))
          }
        </div>
      </nav>
      
      <section ref={targetHome} className='home container'>
        <div className='home__main'>
          <div className='home__compro'>
            <h1>Trust Your Asset Security With AI</h1>
            <Button label={'Download Compro'} />
          </div>
          {/* <div className='home__image'>
            <img src='/img/home.png' />
          </div> */}
        </div>
      </section>

      <Why />
      
      <div ref={targetSolution}>
        <Solution />
      </div>

      <How />

      <div ref={targetAbout}>
        <About />
      </div>
      
      <div ref={targetFeatures}>
        <Features />
      </div>

      <CaseStudy />
      
      <div ref={targetProducts}>
        <Product />
      </div>

      <Projects />

      <Clients />

      <Footer />
    </>
  )
}

export default Home